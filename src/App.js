// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
} from "@mui/material";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Restaurant from "./components/Restaurant";
import BookRoom from "./components/BookRoom";
import Contact from "./components/Contact";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Footer from "./components/Footer"; // Import the Footer component

function App() {
    return (
        <Router>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                <AppBar position="static">
                    <Toolbar sx={{ justifyContent: "center" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography
                                variant="h6"
                                style={{ flexGrow: 1, marginRight: 45 }}
                            >
                                Bonus Apartments Budva
                            </Typography>
                            <Button color="inherit" component={Link} to="/">
                                Home
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/rooms"
                            >
                                Rooms
                            </Button>

                            <Button
                                color="inherit"
                                component={Link}
                                to="/book-room"
                            >
                                Book Room
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/restaurant"
                            >
                                Restaurant
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/contact"
                            >
                                Contact
                            </Button>
                            <Box ml={2}>
                                <LanguageSwitcher />
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Container style={{ flex: 1, marginTop: "20px" }}>
                    <Routes>
                        <Route path="/rooms" element={<Rooms />} />
                        <Route path="/restaurant" element={<Restaurant />} />
                        <Route path="/book-room" element={<BookRoom />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Container>
                <Footer /> {/* Add the Footer component */}
            </Box>
        </Router>
    );
}

export default App;
