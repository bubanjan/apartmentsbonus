import React from "react";
import { Container, Typography, Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            flex
            sx={{
                mt: "70px",
                mb: "150px",
                ml: { xs: "0", md: "200px" },
                alignItems: "center",
            }}
        >
            <Stack flex="1" sx={{ mx: 3 }}>
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
                    style={{ width: "80%", height: "auto" }}
                />
            </Box>
        </Stack>
    );
};

export default Home;
