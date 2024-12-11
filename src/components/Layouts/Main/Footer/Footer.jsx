import { Box, Divider } from "@mui/material";

import BottomFooter from "./ButtomFooter/Bottomfooter.jsx";
import MainFooter from "./MainFooter/MainFooter.jsx";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#512212",
        mt: 20,
        color: "white",
      }}
    >
      <MainFooter />
      <Divider flexItem orientation="horizontal" color={"#7e2b22"} />
      <BottomFooter />
    </Box>
  );
}
