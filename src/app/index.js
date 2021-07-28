import React from "react";
import Router from "./router";
import { ThemeProvider } from "@material-ui/core/styles";
import GlobalStyle from "./global-style";
import theme from "./theme-dark";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
