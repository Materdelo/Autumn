import { Box, Button, Link, Typography } from "@mui/material";
import { routes } from "../../config/routes.js";

export default function AutumnBox() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        flex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontFamily: "Autumn", fontSize: 180, color: "#5e0b02" }}
        >
          Jesień
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: 30,
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "right",
            mt: -4,
            color: "#5e0b02",
          }}
        >
          Nie chce się żyć
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#5e0b02",
          }}
        >
          TOP 10 ciekawostek o jesieni
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
            mt: 2,
            px: 10,
            lineHeight: "18px",
            textAlign: "center",
            fontWeight: 300,
            color: "#5e0b02",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pretium et erat quis dapibus. Suspendisse commodo felis non elit
          vulputate viverra. Morbi nibh mauris, varius gravida sapien id,
          ullamcorper ultrices metus.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Link href={routes.interactive_game.url}>
          <Button variant="contained" sx={{ width: 250 }}>
            Poznaj naszą grę
          </Button>
        </Link>
        <Link href={routes.gallery.url}>
          <Button variant="outlined" sx={{ width: 250 }}>
            Galeria
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
