// src/components/Rooms.jsx
import React, { useState } from "react";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const rooms = [
    {
        title: "Room 1",
        description:
            "Studio apartment with big terrace, 4 persons, air conditioning, TV, wi fi internet, kitchen, big terrace, bathroom ",
        folder: "room1",
    },
    {
        title: "Room 2",
        description:
            "Studio apartment with balcony (for 3 persons) air conditioning, TV, wi fi internet , kitchen, balcony, bathroom",
        folder: "room2",
    },
    {
        title: "Room 3",
        description:
            "Triple room with balcony, air conditioning, TV, wi fi internet, fridge, balcony, bathroom",
        folder: "room3",
    },
    {
        title: "Room 4",
        description:
            "Twin room with balcony, air conditioning, TV, wi fi internet, fridge, balcony, bathroom",
        folder: "room4",
    },
    {
        title: "Room 10",
        description:
            "One-bedroom apartment with balcony for 4 persons, living room, bedroom, air conditioning, TV, wi fi internet , kitchen, balcony, bathroom  ",
        folder: "room10",
    },
    {
        title: "Room 12",
        description:
            "one-bedroom apartment with terrace (up to 5 persons), living room, bedroom, kitchen, air conditioning, TV, wi fi internet , terrace, bathroom ",
        folder: "room12",
    },
];

const Rooms = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);

    const openLightbox = (folder) => {
        const images = Array.from(
            { length: 8 },
            (_, i) => `/images/${folder}/one${i + 1}.jpg`
        );
        setCurrentImages(images);
        setPhotoIndex(0);
        setIsOpen(true);
    };

    return (
        <Container>
            <Grid container spacing={4}>
                {rooms.map((room, index) => (
                    <Grid item xs={12} sm={6} md={4} sx={{ mt: 5 }} key={index}>
                        <Box
                            border={1}
                            padding={2}
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            height="100%"
                        >
                            <Box>
                                <Typography variant="h5" gutterBottom>
                                    {room.title}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {room.description}
                                </Typography>
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                flexDirection="column"
                                gap={1}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => openLightbox(room.folder)}
                                >
                                    View Gallery
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "pink",
                                        color: "purple",
                                    }}
                                    href="/book-room"
                                >
                                    Book Room
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {isOpen && (
                <Lightbox
                    mainSrc={currentImages[photoIndex]}
                    nextSrc={
                        currentImages[(photoIndex + 1) % currentImages.length]
                    }
                    prevSrc={
                        currentImages[
                            (photoIndex + currentImages.length - 1) %
                                currentImages.length
                        ]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex(
                            (photoIndex + currentImages.length - 1) %
                                currentImages.length
                        )
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % currentImages.length)
                    }
                />
            )}
        </Container>
    );
};

export default Rooms;
