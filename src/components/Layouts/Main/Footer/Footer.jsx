import { Box, Divider, Typography } from "@mui/material";

import icon from "../../../../assets/icon.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#512212",
        mt: 20,
        color: "white",
      }}
    >
      <Box sx={{ flex: 1 }}>nigger</Box>
      <Divider flexItem orientation="horizontal" color={"#7e2b22"} />
      <Box
        sx={{
          width: "100%",
          p: 2,
          px: 3,
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <img
            src={icon}
            alt="icon"
            style={{ height: "100%", width: "auto", color: "#7e2b22" }}
          />
          <Typography sx={{ fontFamily: "Autumn2", color: "#9e4b42" }}>
            Poszukujemy jesieni
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: 12, color: "#9e4b42" }}>
            Wcale tego nie chcemy, lato lepsze
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
