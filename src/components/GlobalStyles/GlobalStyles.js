import { createGlobalStyle } from 'styled-components'
import { prop } from 'styled-tools'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600|Lato:700');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${prop('theme.fonts.primary')};
    margin: 0;
    padding: 0;
  }
`
