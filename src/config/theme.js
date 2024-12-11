const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "9px",
        fontSize: 16,
      },
    },
  },
};

export const lightTheme = {
  palette: {
    mode: "light",
    background: {
      default: "#fde3c0",
      paper: "#fde3c0",
    },
    primary: {
      main: "#5e0b02",
      contrastText: "white",
    },
    secondary: {
      main: "#7d2c22",
      contrastText: "white",
    },
    text: {
      primary: "#512212",
    },
  },
  components,
};

export const darkTheme = {
  palette: {
    mode: "dark",
    background: {
      default: "#fde3c0",
      paper: "#fde3c0",
    },
    primary: {
      main: "#5e0b02",
      contrastText: "white",
    },
    secondary: {
      main: "#7d2c22",
      contrastText: "white",
    },
    text: {
      primary: "#512212",
    },
  },
  components,
};
