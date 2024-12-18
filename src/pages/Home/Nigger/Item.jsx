import { Box, Typography } from "@mui/material";

export default function Item({ image, text, reverse, index }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: reverse ? "row-reverse" : "row" },
        maxWidth: "2140px",
        width: "100%",
        margin: "0 auto",
        minHeight: "1000px",
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#512212",
        }}
      />
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#512212",
          py: 1,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: "80%" }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Autumn",
              fontSize: 40,
              color: "#fff3d0",
              fontWeight: "bold",
              mb: 4,
            }}
          >
            Ciekawostka {index}
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>{text}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
