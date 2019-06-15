import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFBB21', contrastText: 'white' },
    secondary: { main: '#FDE3A8' },
    initial: { main: '#764C24' }
  }
})

const AppThemeProvider = props => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default AppThemeProvider
