// src/components/BookRoom.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const BookRoom = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Book a room
            </Typography>
            {/* <Typography variant="body1">
                You can see availability and prices on our booking.com site and
                book rooms.
            </Typography> */}
            <Box
                component="iframe"
                src="https://www.booking.com/hotel/me/apartments-bonus-budva.html"
                width="100%"
                height="600px"
                style={{ border: 0 }}
                title="Booking.com"
                allowFullScreen
            />
        </Container>
    );
};

export default BookRoom;
