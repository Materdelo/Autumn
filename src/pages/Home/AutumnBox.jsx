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
              <strong>1. Równonoc Jesienna:</strong> Jesień astronomiczna zaczyna się od równonocy jesiennej, która zwykle przypada na 22 lub 23 września. W tym dniu długość dnia i nocy jest niemal identyczna.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>2. Barwna Transformacja Liści:</strong> Za piękne jesienne kolory liści odpowiadają pigmenty: karotenoidy (żółty i pomarańczowy) oraz antocyjany (czerwony). Kiedy chlorofil zanika, inne barwy wychodzą na pierwszy plan.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>3. Zapach Jesieni:</strong> Charakterystyczny zapach jesieni pochodzi z procesów rozkładu liści i wilgotnej gleby. Za tę woń odpowiadają związki chemiczne, jak geosmina.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>4. Dynia – Symbol Jesieni:</strong> Dynia jest symbolem Halloween i bogatym źródłem witamin. Jej nasiona to zdrowa przekąska pełna białka i cynku.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>5. Migracje Zwierząt:</strong> Jesień to czas migracji ptaków, takich jak bociany czy żurawie, w poszukiwaniu ciepła i pożywienia.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>6. Grzybobranie:</strong> Jesień to ulubiona pora grzybiarzy. W polskich lasach można znaleźć borowiki, kurki, maślaki i inne grzyby.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>7. Jesień a Nastrój:</strong> Mniejsza ilość światła słonecznego wpływa na produkcję serotoniny, co może powodować jesienną melancholię.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>8. Zimny Poranek, Ciepłe Dni:</strong> „Babie lato” to okres ciepłych dni w środku chłodniejszej pory roku.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>9. Spadające Kasztany:</strong> Jesień to czas zbierania kasztanów i żołędzi, które można wykorzystać do kreatywnych zabaw.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>10. Najlepszy Czas na Herbatę:</strong> Jesień to idealna pora na rozgrzewające herbaty z imbirem, cynamonem czy miodem.
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
