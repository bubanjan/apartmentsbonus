// src/components/Contact.jsx
import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import ViberIcon from "./ViberIcon.js";

const Contact = () => {
    return (
        <Container sx={{ mt: 2 }}>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.216500518275!2d18.848000133111704!3d42.28935305671298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE3JzIyLjMiTiAxOMKwNTAnNTMuMyJF!5e0!3m2!1sen!2s!4v1591246643000!5m2!1sen!2s"
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
            <Box display="flex" alignItems="center" mb={1}>
                <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                    Address: Babilonija 112, Budva, Montenegro
                </Typography>
            </Box>
            <Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <PhoneIcon />
                    <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                        +38268866138
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <ViberIcon />
                    <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                        +46762207680
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <WhatsAppIcon />
                    <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                        +46762207680
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <TelegramIcon />
                    <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                        +46762207680
                    </Typography>
                </Box>
            </Box>
            <Box mt={2}>
                <Button variant="contained" color="primary" href="/book-room">
                    Book Room
                </Button>
            </Box>
        </Container>
    );
};

export default Contact;
