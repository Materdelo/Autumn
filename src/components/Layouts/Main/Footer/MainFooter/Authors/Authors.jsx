import {Box, IconButton, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Authors() {
    return (
        <Box sx={{ p: 2, display: "flex", width: "100%", flexDirection: "column" }} >
            <Typography variant="h4"  sx={{ px: 10, pb: 2, fontWeight: "bold" }}>Autorzy</Typography>
            <Box sx={{ px: 12, pb: 1}}>
                <ul style={{marginLeft: 20, fontSize: 15}}>
                    <li>
                        <IconButton href="https://github.com/onhq11" target="_blank">
                            <GitHubIcon />
                        </IconButton>
                        Mateusz Matecki
                    </li>
                    <li>
                        <IconButton href="https://github.com/Materdelo" target="_blank">
                            <GitHubIcon />
                        </IconButton>
                        Mateusz Olszowy</li>
                    <li>
                        <IconButton href="https://github.com/Miloszkh" target="_blank">
                            <GitHubIcon />
                        </IconButton>
                        Miłosz wiejak</li>
                </ul>
            </Box>
        </Box>
    )
};