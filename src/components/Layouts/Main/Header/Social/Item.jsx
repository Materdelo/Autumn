import { IconButton, Tooltip } from "@mui/material";

export default function Item({ label, icon, onClick }) {
  return (
    <Tooltip title={label}>
      <IconButton
        sx={{
          backgroundColor: "#6a0000",
          "&:hover": { opacity: 0.9 },
          "&:active": { opacity: 0.8 },
          transition: "0.2s",
          p: 0.75,
        }}
        size="small"
        onClick={onClick}
        disableRipple
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}
