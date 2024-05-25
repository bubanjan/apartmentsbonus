// src/components/Home.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Home = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Welcome to Our Hotel
            </Typography>
            <Typography variant="body1" paragraph>
                Nestled in the heart of the city, our hotel offers a unique
                blend of luxury and comfort. Whether you're here for business or
                leisure, you'll find our amenities and services designed to meet
                your every need. Enjoy a relaxing stay with us and experience
                the best hospitality in town.
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img
                    src="/images/general/gen1.jpg"
                    alt="Hotel"
                    style={{ width: "50%", height: "auto" }}
                />
            </Box>
        </Container>
    );
};

export default Home;
