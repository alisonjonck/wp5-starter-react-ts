import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider } from '@material-ui/core/styles'

import CustomTheme from './styles/theme'
import HomePage from './pages/HomePage'

const App = () => (
  <StylesProvider injectFirst>
      <CssBaseline />
      <HomePage />
  </StylesProvider>
  )
  
  ReactDOM.render(<App />, document.getElementById('app'))
  