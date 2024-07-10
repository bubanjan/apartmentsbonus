import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Stack,
    IconButton,
} from "@mui/material";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Restaurant from "./components/Restaurant";
import BookRoom from "./components/BookRoom";
import Contact from "./components/Contact";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function App() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Router>
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <AppBar position="sticky">
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Bonus Apartments Budva
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { xs: "block", md: "none" } }}
                            onClick={toggleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box
                            sx={{
                                display: {
                                    xs: isMenuOpen ? "block" : "none",
                                    md: "flex",
                                },
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: { xs: "start", md: "center" },
                            }}
                        >
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
                <Box sx={{ flex: 1, mt: 0 }}>
                    <Routes>
                        <Route path="/rooms" element={<Rooms />} />
                        <Route path="/restaurant" element={<Restaurant />} />
                        <Route path="/book-room" element={<BookRoom />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Box>
            </Stack>
        </Router>
    );
}

export default App;
