import { Box, Typography } from "@mui/material";

import banner from "../../assets/gallery/banner.jpg";

export default function Banner() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "600px",
        position: "relative",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100vw",
          overflow: "hidden",
          zIndex: -1,
          filter: "brightness(0.7)",
        }}
      >
        <img
          src={banner}
          alt={"banner"}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 6,
          flexDirection: "column",
          pt: "100px",
        }}
      >
        <Typography variant="h2" sx={{ zIndex: 2, color: "#fde3c0" }}>
          Galeria
        </Typography>
        <Typography
          variant="h4"
          sx={{
            zIndex: 2,
            color: "#fde3c0",
            fontSize: 20,
          }}
        >
          Tutaj znajdziesz galerię najpiękniejszych zdjęć jesieni, gdzie każde
          kryje swoją ukrytą magię.
        </Typography>
      </Box>
    </Box>
  );
}
