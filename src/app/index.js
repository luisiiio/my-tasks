import React from "react";
import { Provider } from "react-redux";
import Router from "./router";
import { store } from "./store";

// styles
import { ThemeProvider } from "@material-ui/core/styles";
import GlobalStyle from "./styles/global-style";
import theme from "./styles/theme-dark";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
