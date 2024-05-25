// src/components/Rooms.jsx
import React, { useState } from "react";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const rooms = [
    {
        title: "Room 1",
        description: "Test about room 1",
        folder: "room1",
    },
    {
        title: "Room 2",
        description: "Test about room 2",
        folder: "room2",
    },
    {
        title: "Room 3",
        description: "Test about room 3",
        folder: "room3",
    },
    {
        title: "Room 4",
        description: "Test about room 4",
        folder: "room4",
    },
    {
        title: "Room 10",
        description: "Test about room 5",
        folder: "room10",
    },
    {
        title: "Room 12",
        description: "Test about room 6",
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
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box border={1} padding={2}>
                            <Typography variant="h5" gutterBottom>
                                {room.title}
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {room.description}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => openLightbox(room.folder)}
                            >
                                View Gallery
                            </Button>
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
