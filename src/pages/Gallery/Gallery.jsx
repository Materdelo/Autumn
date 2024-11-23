import Main from "../../components/Layouts/Main/Main.jsx";
import { useState } from "react";
import Preview from "./Preview.jsx";
import List from "./List.jsx";
import Banner from "./Banner.jsx";
import { Box, Typography } from "@mui/material";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (item) => {
    setSelected(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <Main>
      <Banner />
      <Typography
        sx={{ px: 10, fontSize: 20, pt: 10, pb: 1, fontWeight: "bold" }}
      >
        Zdjęcia przygotowane przez wykwalifikowanych strzelców zdjęć
      </Typography>
      <Box sx={{ px: 12, pb: 1 }}>
        <ul>
          <li>
            <a
              href="https://copilot.microsoft.com/onboarding"
              style={{ color: "#512212" }}
            >
              Bing Copilot
            </a>
          </li>
          <li>
            <a href="https://picsum.photos/" style={{ color: "#512212" }}>
              Lorem Picsum
            </a>
          </li>
        </ul>
      </Box>
      <List onItemClick={handleOpen} />
      <Preview open={open} onClose={handleClose} selected={selected} />
    </Main>
  );
}
