import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body {
    color: ${props => props.theme.app.fontColor};
    font: 14px/1 ${props => props.theme.font.family};
    background: ${props => props.theme.app.backgroundColor};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`