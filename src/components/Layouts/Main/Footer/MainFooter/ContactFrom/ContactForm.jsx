import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      alert("Poprawne dane");
    } else {
      alert("Formularz wypełniony niepoprawnie");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        px: { xs: 2, md: 8 },
        py: 5,
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          px: { xs: 2, md: 10 },
          pb: 2,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Formularz kontaktowy
      </Typography>
      <TextField
        size="small"
        sx={{
          m: 1,
          "& .MuiOutlinedInput-input": {
            color: "#aaa",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#9d4c42",
            },
            "&:hover fieldset": {
              borderColor: "#9d4c42",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#bd6c62",
            },
            "&.Mui-error fieldset": {
              borderColor: "#ff2222",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#9d4c42",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#bd6c62",
          },
          "& .MuiInputLabel-root.Mui-error": {
            color: "#ff2222",
          },
        }}
        label="Twój email"
        variant="outlined"
        onChange={handleEmailChange}
        error={emailError}
        helperText={emailError ? "Podaj poprawny adres email" : ""}
        inputProps={{ type: "email" }}
        required
      ></TextField>
      <TextField
        size="small"
        sx={{
          m: 1,
          "& .MuiOutlinedInput-input": {
            color: "#aaa",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#9d4c42",
            },
            "&:hover fieldset": {
              borderColor: "#9d4c42",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#bd6c62",
            },
            "&.Mui-error fieldset": {
              borderColor: "#ff2222",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#9d4c42",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#bd6c62",
          },
          "& .MuiInputLabel-root.Mui-error": {
            color: "#ff2222",
          },
        }}
        label="Twoja wiadomość"
        variant="outlined"
        multiline
        rows={4}
        required
      ></TextField>
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        sx={{ mx: 1, mt: 3 }}
      >
        Wyślij
      </Button>
    </Box>
  );
}
