import {Box, Typography} from "@mui/material";
import icon from "../../../../../assets/icon.png";

export default function BottomFooter() {
    return(
        <Box
            sx={{
                p: 2,
                px: 3,
                height: "60px",
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                maxWidth: "1440px",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                }}
            >
                <img
                    src={icon}
                    alt="icon"
                    style={{ height: "100%", width: "auto", color: "#7e2b22" }}
                />
                <Typography sx={{ fontFamily: "Autumn2", color: "#9e4b42" }}>
                    Poszukujemy jesieni
                </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: 12, color: "#9e4b42" }}>
                    © 2024 Wszystkie prawa zastrzeżone
                </Typography>
            </Box>
        </Box>
    )
}