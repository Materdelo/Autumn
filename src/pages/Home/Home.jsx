import Main from "../../components/Layouts/Main/Main.jsx";
import AutumnBox from "./AutumnBox.jsx";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Main>
      <Box sx={{ display: "flex", px: 10, pt: 15 }}>
        <AutumnBox />
        <Box sx={{ flex: 1 }} />
      </Box>
    </Main>
  );
}
