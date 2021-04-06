import React from "react"
import ReactDOM from "react-dom"
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider } from '@material-ui/core/styles'

import HomePage from "./pages/HomePage"

const App = () => (
    <div>
        <p>Hi there, I'm React from Webpack 5.</p>
        <HomePage />
    </div>
)

ReactDOM.render((
    <>
        <StylesProvider injectFirst>
            <CssBaseline />
            <App />
        </StylesProvider>
    </>
), document.getElementById("app"))
