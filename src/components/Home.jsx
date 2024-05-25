// src/components/Home.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Home = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Welcome to Our Hotel
            </Typography>
            <Box>
                <img
                    src="https://via.placeholder.com/800x400"
                    alt="Hotel"
                    style={{ width: "100%", height: "auto" }}
                />
            </Box>
        </Container>
    );
};

export default Home;
