import { Box } from "@mui/material";

import tree from "../../assets/tree.png";

export default function TreeBox() {
  return (
    <Box sx={{ flex: 1, pt: 2.5, width: "100%", textAlign: "center" }}>
      <Box
        component="img"
        src={tree}
        alt="tree"
        sx={{
          height: { xs: "auto", lg: "100%" },
          width: { xs: "100%", lg: "auto" },
        }}
      />
    </Box>
  );
}
