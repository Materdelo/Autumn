import { Box } from "@mui/material";
import Authors from "./Authors/Authors.jsx";
import ContactForm from "./ContactFrom/ContactForm.jsx";

export default function MainFooter() {
  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: "2140px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        margin: "0 auto",
        flexWrap: "wrap",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Authors />
      <ContactForm />
    </Box>
  );
}
