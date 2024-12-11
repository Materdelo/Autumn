import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Authors() {
  return (
    <Box
      sx={{
        px: 2,
        py: 5,
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Typography
        variant="h4"
        sx={{ px: { xs: 2, md: 6 }, pb: 2, fontWeight: "bold" }}
      >
        Autorzy
      </Typography>
      <Box sx={{ px: { xs: 4, md: 8 }, pb: 1 }}>
        <ul style={{ marginLeft: 20, fontSize: 15 }}>
          <li>
            <IconButton href="https://github.com/onhq11" target="_blank">
              <GitHubIcon />
            </IconButton>
            Mateusz Matecki
          </li>
          <li>
            <IconButton href="https://github.com/Materdelo" target="_blank">
              <GitHubIcon />
            </IconButton>
            Mateusz Olszowy
          </li>
          <li>
            <IconButton href="https://github.com/Miloszkh" target="_blank">
              <GitHubIcon />
            </IconButton>
            Miłosz wiejak
          </li>
        </ul>
      </Box>
    </Box>
  );
}
