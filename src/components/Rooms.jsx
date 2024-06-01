// src/components/Rooms.jsx
import React, { useState } from "react";
import {
    Container,
    Typography,
    Grid,
    Box,
    Button,
    ButtonBase,
} from "@mui/material";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const rooms = [
    {
        title: "Apartment 1",
        description:
            "Studio apartment with big terrace, 4 persons, air conditioning, TV, wi fi internet, kitchen, big terrace, bathroom ",
        folder: "room1",
        bestPhoto: "/images/room1/pic1.jpg", // Add the path to the best photo
    },
    {
        title: "Apartment 2",
        description:
            "Studio apartment with balcony (for 3 persons) air conditioning, TV, wi fi internet , kitchen, balcony, bathroom",
        folder: "room2",
        bestPhoto: "/images/room2/pic2.jpg",
    },
    {
        title: "Apartment 3",
        description:
            "Triple room with balcony, air conditioning, TV, wi fi internet, fridge, balcony, bathroom",
        folder: "room3",
        bestPhoto: "/images/room3/pic3.jpg",
    },
    {
        title: "Room 4",
        description:
            "Twin room with balcony, air conditioning, TV, wi fi internet, fridge, balcony, bathroom",
        folder: "room4",
        bestPhoto: "/images/room4/pic1.jpg",
    },
    {
        title: "Apartment 10",
        description:
            "One-bedroom apartment with balcony for 4 persons, living room, bedroom, air conditioning, TV, wi fi internet , kitchen, balcony, bathroom  ",
        folder: "room10",
        bestPhoto: "/images/room10/pic1.jpg",
    },
    {
        title: "Apartment 12",
        description:
            "one-bedroom apartment with terrace (up to 5 persons), living room, bedroom, kitchen, air conditioning, TV, wi fi internet , terrace, bathroom ",
        folder: "room12",
        bestPhoto: "/images/room12/pic1.jpg",
    },
];

const Rooms = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);

    const openLightbox = (folder) => {
        const images = Array.from(
            { length: 8 },
            (_, i) => `/images/${folder}/pic${i + 1}.jpg`
        );
        setCurrentImages(images);
        setPhotoIndex(0);
        setIsOpen(true);
    };

    return (
        <Container sx={{ flexGrow: 0 }}>
            <Grid container spacing={2}>
                {rooms.map((room, index) => (
                    <Grid item xs={12} sm={6} md={4} sx={{ mt: 3 }} key={index}>
                        <Box
                            sx={{
                                border: "2px solid lightBlue",
                                padding: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                            }}
                        >
                            <Box sx={{ mb: 1 }}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{ color: "gray" }}
                                >
                                    {room.title}
                                </Typography>
                                <Box
                                    sx={{ height: "60px", overflow: "hidden" }}
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
                            <ButtonBase
                                onClick={() => openLightbox(room.folder)}
                                sx={{ display: "block", textAlign: "initial" }}
                            >
                                <Box
                                    component="img"
                                    src={room.bestPhoto}
                                    alt={room.title}
                                    sx={{
                                        width: "100%",
                                        height: "140px",
                                        objectFit: "cover",
                                        borderRadius: "2px",
                                        mb: 0,
                                    }}
                                />
                            </ButtonBase>
                            <Box
                                display="flex"
                                flexDirection="row"
                                gap={1}
                                sx={{ mt: 0 }}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ height: 30, flex: 1 }}
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
                                        height: 30,
                                        flex: 1,
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
