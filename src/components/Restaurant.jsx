// src/components/Restaurant.js
import React from "react";
import { Container, Typography } from "@mui/material";

const Restaurant = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Restaurant
            </Typography>
            <Typography variant="body1">
                Restaurant on the groundfloor of the object which offers half
                board, full board, breakfast only or a-la-cart.
            </Typography>
        </Container>
    );
};

export default Restaurant;
