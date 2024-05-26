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
        bestPhoto: "/images/room1/one1.jpg", // Add the path to the best photo
    },
    {
        title: "Room 2",
        description:
            "Studio apartment with balcony (for 3 persons) air conditioning, TV, wi fi internet , kitchen, balcony, bathroom",
        folder: "room2",
        bestPhoto: "/images/room2/two10.jpg",
    },
    {
        title: "Room 3",
        description:
            "Triple room with balcony, air conditioning, TV, wi fi internet, fridge, balcony, bathroom",
        folder: "room3",
        bestPhoto: "/images/room3/three3.jpg",
    },
    {
        title: "Room 4",
        description:
            "Twin room with balcony, air conditioning, TV, wi fi internet, fridge, balcony, bathroom",
        folder: "room4",
        bestPhoto: "/images/room4/four1.jpg",
    },
    {
        title: "Room 10",
        description:
            "One-bedroom apartment with balcony for 4 persons, living room, bedroom, air conditioning, TV, wi fi internet , kitchen, balcony, bathroom  ",
        folder: "room10",
        bestPhoto: "/images/room10/ten1.jpg",
    },
    {
        title: "Room 12",
        description:
            "one-bedroom apartment with terrace (up to 5 persons), living room, bedroom, kitchen, air conditioning, TV, wi fi internet , terrace, bathroom ",
        folder: "room12",
        bestPhoto: "/images/room12/twelve1.jpg",
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
            <Grid container spacing={2}>
                {rooms.map((room, index) => (
                    <Grid item xs={12} sm={6} md={4} sx={{ mt: 3 }} key={index}>
                        <Box
                            border={1}
                            padding={2}
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            height="100%"
                        >
                            <Box sx={{ mb: 0.5 }}>
                                <Typography variant="h6" gutterBottom>
                                    {room.title}
                                </Typography>
                                <Box
                                    sx={{
                                        height: "60px", // Fixed height for the description
                                        overflow: "hidden",
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        sx={{ fontSize: "14px" }}
                                    >
                                        {room.description}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                component="img"
                                src={room.bestPhoto}
                                alt={room.title}
                                sx={{
                                    width: "100%",
                                    height: "140px", // Fixed height
                                    objectFit: "cover", // Maintain aspect ratio
                                    border: "2px solid pink",
                                    borderRadius: "2px",
                                    mb: 0, // Removed margin-bottom
                                }}
                            />
                            <Box
                                mt={1} // Ensures some space between the image and the button
                                display="flex"
                                flexDirection="column"
                                gap={1}
                                sx={{ mt: "auto" }} // Push buttons to the bottom
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ height: 30 }} // Increased button height for consistency
                                    onClick={() => openLightbox(room.folder)}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: "12px" }}
                                    >
                                        View Gallery
                                    </Typography>
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "darkGreen",
                                        color: "white",
                                        height: 30, // Increased button height for consistency
                                    }}
                                    href="/book-room"
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: "12px" }}
                                    >
                                        Book Room
                                    </Typography>
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
