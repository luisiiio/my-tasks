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

  #app {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
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

  .MuiDialog-paperWidthSm {
    max-width: 500px;
  }
`;

export default GlobalStyle;
