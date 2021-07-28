import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body,
  html {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  #root {
    height: 100vh;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-flow: column;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  h1 {
    margin: 0;
  }
`;

export default GlobalStyle;
