import { Box } from "@mui/material";
import Item from "./Item.jsx";
import { routes } from "../../../../../config/routes.js";

export default function Navigation() {
  return (
    <Box component="nav" sx={{ gap: 2, display: "flex" }}>
      <Item label="Strona główna" href={routes.home.url} />
      <Item label="Galeria" href={routes.gallery.url} />
      <Item label="Gra interaktywna" href={routes.interactive_game.url} />
    </Box>
  );
}
