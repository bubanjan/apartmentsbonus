// src/components/BookRoom.js
import React from "react";
import { Container, Typography } from "@mui/material";

const BookRoom = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Book a Room
            </Typography>
            <Typography variant="body1">
                Here you can book a room at our hotel.
            </Typography>
        </Container>
    );
};

export default BookRoom;
