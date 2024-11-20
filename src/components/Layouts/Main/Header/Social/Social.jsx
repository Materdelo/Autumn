import { Box } from "@mui/material";
import Item from "./Item.jsx";
import { LocalPhone } from "@mui/icons-material";

export default function Social() {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <Item
        label="Kontakt"
        icon={<LocalPhone sx={{ fontSize: "16px" }} />}
        onClick={() => {
          console.log("nigger");
        }}
      />
      <Item
        label="Kontakt"
        icon={<LocalPhone sx={{ fontSize: "16px" }} />}
        onClick={() => {
          console.log("nigger");
        }}
      />
      <Item
        label="Kontakt"
        icon={<LocalPhone sx={{ fontSize: "16px" }} />}
        onClick={() => {
          console.log("nigger");
        }}
      />

      <Item
        label="Kontakt"
        icon={<LocalPhone sx={{ fontSize: "16px" }} />}
        onClick={() => {
          console.log("nigger");
        }}
      />
    </Box>
  );
}
