import { createGlobalStyle } from 'styled-components'

export const cores = {
  principal: '#a7727d',
  secundaria: '#f9f5e7'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }
`

export default GlobalStyle
