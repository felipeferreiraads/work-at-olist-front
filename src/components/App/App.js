import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/GlobalStyles'
import HomeScreen from 'screens/HomeScreen'
import theme from 'config/theme'

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <HomeScreen />
      </React.Fragment>
    </ThemeProvider>
  )
}
