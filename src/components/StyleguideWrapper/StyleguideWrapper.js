import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/GlobalStyles'
import theme from 'config/theme'

export default function StyleguideWrapper (props) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <div {...props} />
      </React.Fragment>
    </ThemeProvider>
  )
}
