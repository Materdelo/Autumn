import {Box} from "@mui/material";
import Authors from "./Authors/Authors.jsx";
import ContactForm from "./ContactFrom/ContactForm.jsx";

export default function MainFooter(){
     return (
         <Box sx={{ flex: 1, maxWidth: "1440px", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
             <Authors />
             <ContactForm />
         </Box>
     )
}