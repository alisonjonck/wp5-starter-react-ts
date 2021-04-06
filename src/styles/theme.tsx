import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

const customTheme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
}

interface ThemeProps {
  children: React.ReactNode,
}

export default ({ children } : ThemeProps) => <ThemeProvider theme={theme => ({...theme, customTheme})} children={children} />
