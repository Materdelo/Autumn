import { Box } from "@mui/material";
import Navigation from "./Navigation/Navigation.jsx";
import Social from "./Social/Social.jsx";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        px: 10,
        py: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "2140px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Navigation />
      <Social />
    </Box>
  );
}
