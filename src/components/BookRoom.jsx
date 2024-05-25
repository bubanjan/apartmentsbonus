// src/components/BookRoom.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const BookRoom = () => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            <iframe
                src="https://www.booking.com/hotel/me/apartments-bonus-budva.html"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                }}
                title="Booking.com"
                allowFullScreen
            />
        </Box>
    );
};

export default BookRoom;
