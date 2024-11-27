import { Box } from "@mui/material";
import Item from "./Item.jsx";
import {
  Bedtime,
  Brightness5,
  InsertPhoto,
  LocalPhone,
  VideogameAsset,
} from "@mui/icons-material";
import { useContext } from "react";
import { ThemeContext } from "../../../../Providers/ThemeProvider.jsx";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../../config/routes.js";

export default function Social() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <Item
        label="Kontakt"
        icon={<LocalPhone sx={{ fontSize: "16px" }} />}
        onClick={() => {}}
      />
      <Item
        label="Galeria"
        icon={<InsertPhoto sx={{ fontSize: "16px" }} />}
        onClick={() => {
          navigate(routes.gallery.url);
        }}
      />
      <Item
        label="Gra interaktywna"
        icon={<VideogameAsset sx={{ fontSize: "16px" }} />}
        onClick={() => {
          navigate(routes.interactive_game.url);
        }}
      />
      <Item
        label={theme.palette.mode === "dark" ? "Jasny motyw" : "Ciemny motyw"}
        icon={
          theme.palette.mode === "dark" ? (
            <Brightness5 sx={{ fontSize: "16px" }} />
          ) : (
            <Bedtime sx={{ fontSize: "16px" }} />
          )
        }
        onClick={() => handleToggleTheme()}
      />
    </Box>
  );
}
