import Main from "../components/Layouts/Main/Main.jsx";
import { useState } from "react";
import ImageDialog from "../components/Layouts/Gallery/ImageDialog.jsx";
import ImageListWrapper from "../components/Layouts/Gallery/ImageListWrapper.jsx";

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
        <ImageListWrapper onItemClick={handleOpen}/>
        <ImageDialog open={open} onClose={handleClose} selected={selected}/>
      </Main>
  );
}
