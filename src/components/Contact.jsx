// src/components/Contact.jsx
import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

import ViberIcon from "./ViberIcon.js";

const Contact = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "400px",
                    marginBottom: "20px",
                }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.213961077749!2d19.091953015495567!3d42.288922979191506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134de9db9319b8db%3A0x160af6ae89a1a6b2!2sBudva!5e0!3m2!1sen!2s!4v1591246643000!5m2!1sen!2s"
                    style={{
                        border: 0,
                        width: "100%",
                        height: "100%",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                ></iframe>
            </Box>
            <Typography variant="h6" gutterBottom>
                Contact Information
            </Typography>
            <Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <PhoneIcon />
                    <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                        +382 33 123 456
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <ViberIcon />
                    <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                        +382 67 123 456
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <WhatsAppIcon />
                    <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                        +382 67 123 456
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <TelegramIcon />
                    <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                        +382 67 123 456
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Contact;
