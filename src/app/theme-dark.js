import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E1E1E",
    },
    secondary: {
      main: "#FFFFFF",
    },
    error: {
      main: "#FACC31",
    },
  },
  status: {
    danger: "orange",
  },
});

export default theme;
