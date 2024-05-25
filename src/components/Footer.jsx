// src/components/Footer.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <AppBar
            position="static"
            component="footer"
            sx={{ top: "auto", bottom: 0 }}
        >
            <Toolbar sx={{ justifyContent: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body1">
                        Contact us: +382 33 123 456
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
