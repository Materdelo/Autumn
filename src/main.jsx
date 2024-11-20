import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "./components/Providers/ThemeProvider.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./config/routes.js";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Routes>
          {Object.values(routes).map((route) => {
            const Component = route.component;
            return (
              <Route
                key={route.name}
                path={route.url}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>,
);
