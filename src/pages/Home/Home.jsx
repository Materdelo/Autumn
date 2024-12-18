import Main from "../../components/Layouts/Main/Main.jsx";
import AutumnBox from "./AutumnBox.jsx";
import { Box } from "@mui/material";
import TreeBox from "./TreeBox/TreeBox.jsx";
import Nigger from "./Nigger/Nigger.jsx";

export default function Home() {
  return (
    <Main>
      <Box
        sx={{
          display: "flex",
          px: { xs: 3, md: 10 },
          flexDirection: { xs: "column", lg: "row" },
          gap: 4,
          pb: 30,
        }}
      >
        <AutumnBox />
        <TreeBox />
      </Box>
      <Nigger />
    </Main>
  );
}
