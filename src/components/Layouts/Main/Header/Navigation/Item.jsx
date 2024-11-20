import { Box, Link } from "@mui/material";

export default function Item({ label, href }) {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        textDecoration: "none",
        cursor: "pointer",
        color: "#512212",
        textTransform: "uppercase",
        fontWeight: "bold",
      }}
    >
      {label}
    </Box>
  );
}
