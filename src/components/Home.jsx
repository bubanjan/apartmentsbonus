// src/components/Home.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Home = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Bonus Apartments Budva
            </Typography>
            <Typography variant="body1" paragraph>
                Apartments Bonus is set in a peaceful residential area of Budva
                near Slovenian beach, just 300 m from the main pebbly beach.
            </Typography>
            <Typography variant="body1" paragraph>
                There is a restaurant on the ground floor of the property which
                offers half board, full board, breakfast only, or a-la-cart. A
                grocery shop can be found right next to the property, while
                numerous bars and nightclubs can be found just a couple of
                minutes walk from the Bonus. Local buses stop just 100 meters
                from Bonus Apartments and drive to any of the 14 nice beaches in
                Budva (Jaz, Becici, Kamenovo, Sveti Stefan...) for just 1.5 EUR
                per bus ticket.
            </Typography>
            <Typography variant="body1" paragraph>
                We offer accommodation in first category rooms and apartments
                with air-conditioning, cable TV, free Wi-Fi internet, kitchen
                (apartments), fridge (rooms), terrace, and bathroom.
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
