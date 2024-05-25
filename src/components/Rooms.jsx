// src/components/Rooms.js
import React from "react";
import { Container, Typography } from "@mui/material";

const Rooms = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Rooms
            </Typography>
            <Typography variant="body1">
                Here you can find details about our rooms.
            </Typography>
        </Container>
    );
};

export default Rooms;
