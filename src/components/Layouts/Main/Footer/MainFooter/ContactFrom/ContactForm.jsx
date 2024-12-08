import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (ev) => {
        setEmail(ev.target.value);
        if (ev.target.validity.valid) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            alert("Poprawne dane");
        } else {
            alert("Formularz wypełniony niepoprawnie");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ p: 2, display: "flex", width: "100%", flexDirection: "column" }}>
            <Typography sx={{textAlign: "center"}}>Formularz Kontaktowy </Typography>
            <TextField sx={{
                m: 1,
                "& .MuiOutlinedInput-input": {
                    color: "gray",
                },
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "gray",
                    },
                    "&:hover fieldset": {
                        borderColor: "gray",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "white",
                    },
                    "&.Mui-error fieldset": {
                        borderColor: "red",
                    },
                },
                "& .MuiInputLabel-root": {
                    color: "gray",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: "white",
                },
                "& .MuiInputLabel-root.Mui-error": {
                    color: "red",
                },
            }} label="Twój email" variant="outlined" onChange={handleEmailChange} error={emailError} helperText={emailError ? "Podaj poprawny adres email": ""} inputProps={{type: "email"}} required ></TextField>
            <TextField sx={{
                m: 1,
                "& .MuiOutlinedInput-input": {
                    color: "gray",
                },
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "gray",
                    },
                    "&:hover fieldset": {
                        borderColor: "gray",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "white",
                    },
                },
                "& .MuiInputLabel-root": {
                    color: "gray",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: "white",
                },
            }} label="Twoja wiadomość" variant="outlined" multiline rows={4} required ></TextField>
            <Button variant="contained" type="submit" sx={{color: "white", backgroundColor: "darkgray" }}>Wyślij</Button>
        </Box>
    )
}