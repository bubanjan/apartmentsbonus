// src/components/Home.js
import React from "react";
import { Container, Typography, Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <Stack direction="row" flex sx={{ my: "150px", ml: "200px" }}>
            <Stack flex="1">
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
            </Stack>

            <Box
                flex="2"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 2, padding: "0" }}
            >
                <img
                    src="/images/general/gen1.jpg"
                    alt="Hotel"
                    style={{ width: "60%", height: "95%" }}
                />
            </Box>
        </Stack>
    );
};

export default Home;
