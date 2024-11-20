import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../../config/theme.js";
import useLocalStorage from "../../hooks/useLocalStorage.js";

export const ThemeContext = createContext();
export default function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useLocalStorage("themeMode", "dark");
  const [theme, setTheme] = useState(
    themeMode === "dark" ? darkTheme : lightTheme,
  );

  const handleToggleTheme = () => {
    setThemeMode(theme.palette.mode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setTheme(themeMode === "dark" ? darkTheme : lightTheme);
  }, [themeMode]);

  const muiTheme = createTheme(theme);
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
