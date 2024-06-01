// src/components/Home.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {t("welcome")}
            </Typography>
            <Typography variant="body1" paragraph>
                {t("intro1")}
            </Typography>
            <Typography variant="body1" paragraph>
                {t("intro2")}
            </Typography>
            <Typography variant="body1" paragraph>
                {t("intro3")}
            </Typography>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 2 }}
            >
                <img
                    src="/images/general/gen1.jpg"
                    alt="Hotel"
                    style={{ width: "50%" }}
                />
            </Box>
        </Container>
    );
};

export default Home;
