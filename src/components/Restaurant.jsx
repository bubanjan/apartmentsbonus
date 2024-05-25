// src/components/Restaurant.js
import React from "react";
import { Container, Typography } from "@mui/material";

const Restaurant = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Restaurant
            </Typography>
            <Typography variant="body1">
                Here you can find details about our restaurant.
            </Typography>
        </Container>
    );
};

export default Restaurant;
