import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import ViberIcon from "./ViberIcon.js"; // Assuming ViberIcon is imported from the correct path

const Footer = () => {
    return (
        <AppBar
            //position="static"
            component="footer"
            sx={{ top: "auto", bottom: 0 }}
        >
            <Toolbar sx={{ justifyContent: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon />
                    <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                        +38268866138
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "20px",
                    }}
                >
                    <ViberIcon />
                    <WhatsAppIcon />
                    <TelegramIcon />
                    <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                        +46762207680
                    </Typography>
                </Box>
                <Typography variant="body1" sx={{ ml: 2 }}>
                    Address: Babilonija 112, Budva, Montenegro
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
