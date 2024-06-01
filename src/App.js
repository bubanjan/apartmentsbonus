// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, Stack } from "@mui/material";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Restaurant from "./components/Restaurant";
import BookRoom from "./components/BookRoom";
import Contact from "./components/Contact";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Footer from "./components/Footer"; // Import the Footer component
import { useTranslation } from "react-i18next";

function App() {
    const { t } = useTranslation();
    return (
        <Router>
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    //minHeight: "100vh",
                }}
            >
                <AppBar position="sticky">
                    <Toolbar sx={{ justifyContent: "center" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography
                                variant="h6"
                                sx={{ flexGrow: 1, marginRight: 4.5 }}
                            >
                                Bonus Apartments Budva
                            </Typography>
                            <Button color="inherit" component={Link} to="/">
                                {t("homeMenuButton")}
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/rooms"
                            >
                                {t("roomsMenuButton")}
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/book-room"
                            >
                                {t("bookRoomMenuButton")}
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/restaurant"
                            >
                                {t("restaurantMenuButton")}
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/contact"
                            >
                                {t("contactMenuButton")}
                            </Button>
                            <Box ml={2}>
                                <LanguageSwitcher />
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box sx={{ flex: 0, mt: 0 }}>
                    <Routes>
                        <Route path="/rooms" element={<Rooms />} />
                        <Route path="/restaurant" element={<Restaurant />} />
                        <Route path="/book-room" element={<BookRoom />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Box>
                <Footer /> {/* Add the Footer component */}
            </Stack>
        </Router>
    );
}

export default App;
