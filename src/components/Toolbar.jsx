// src/components/Toolbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

const CustomToolbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Hotel Name
                </Typography>
                <Box>
                    <LanguageSwitcher />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default CustomToolbar;
