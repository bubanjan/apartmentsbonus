// src/components/Restaurant.js
import React, { useState } from "react";
import { Container, Typography, Box, ButtonBase } from "@mui/material";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Restaurant = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);

    const openLightbox = () => {
        const images = Array.from(
            { length: 10 },
            (_, i) => `/images/restaurant/rest${i + 1}.jpg`
        );
        setCurrentImages(images);
        setPhotoIndex(0);
        setIsOpen(true);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Restaurant
            </Typography>
            <Typography variant="body1" paragraph>
                Restaurant on the groundfloor of the object which offers half
                board, full board, breakfast only or a-la-cart.
            </Typography>
            <ButtonBase
                onClick={openLightbox}
                sx={{ display: "block", textAlign: "initial" }}
            >
                <Box
                    component="img"
                    src="/images/restaurant/rest1.jpg"
                    alt="Restaurant"
                    sx={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "2px",
                        marginTop: 2,
                        padding: 0,
                    }}
                />
            </ButtonBase>

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

export default Restaurant;
