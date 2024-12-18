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
        pt: 15,
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
        <Box
          sx={{
            mt: 2,
            px: { xs: 2, sm: 5, md: 10 },
            lineHeight: 1.6,
            color: "#5e0b02",
            textAlign: "center",
          }}
        >
          <Typography>
            Poniżej możesz znaleźć listę 10 ciekawostek o jesieni w największym
            skrócie, w jakim udało się zebrać przez naszą ekipę remontową do
            spraw researchu. Możesz tam znaleźc ciekawostki kulturowe,
            okolicznościowe i taki, któ®e znane są tylko w Polsce. Powodzenia w
            przeczytaniu tego, ponieważ jest to giga nudne.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <Link href={routes.interactive_game.url} sx={{ flex: 1 }}>
          <Button variant="contained" sx={{ width: 250 }}>
            Poznaj naszą grę
          </Button>
        </Link>
        <Link href={routes.gallery.url} sx={{ flex: 1 }}>
          <Button variant="outlined" sx={{ width: 250 }}>
            Galeria
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
