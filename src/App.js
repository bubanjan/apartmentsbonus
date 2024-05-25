// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Restaurant from "./components/Restaurant";
import BookRoom from "./components/BookRoom";

function App() {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Bonus Apartments
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/rooms">
                        Rooms
                    </Button>
                    <Button color="inherit" component={Link} to="/restaurant">
                        Restaurant
                    </Button>
                    <Button color="inherit" component={Link} to="/book-room">
                        Book Room
                    </Button>
                </Toolbar>
            </AppBar>

            <Container style={{ marginTop: "20px" }}>
                <Routes>
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/restaurant" element={<Restaurant />} />
                    <Route path="/book-room" element={<BookRoom />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
