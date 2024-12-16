import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    color: white;
  } 

  ul {
    list-style: none;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  body {
    background-color: #040011;
  }

  html {
    font-size: 62.5%;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export default GlobalStyle
