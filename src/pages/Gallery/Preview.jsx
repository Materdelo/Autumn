import { Box, Dialog, IconButton } from "@mui/material";
import { PiX } from "react-icons/pi";

export default function Preview({ open, onClose, selected }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg">
      <Box sx={{ textAlign: "center", height: "90vh", overflowY: "hidden" }}>
        <IconButton
          sx={{ position: "absolute", right: 0, top: 0 }}
          onClick={onClose}
        >
          <PiX />
        </IconButton>
        <img
          src={selected?.img}
          alt={selected?.title}
          style={{ width: "auto", height: "100%", objectFit: "contain" }}
        />
      </Box>
    </Dialog>
  );
}
