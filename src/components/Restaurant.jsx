// src/components/Restaurant.js
import React, { useState } from "react";
import {
    Container,
    Typography,
    Box,
    ButtonBase,
    Stack,
    Link,
} from "@mui/material";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import InstagramIcon from "@mui/icons-material/Instagram"; // Import Instagram icon from MUI
import { useTranslation } from "react-i18next";

const Restaurant = () => {
    const { t } = useTranslation();
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
        <Container sx={{ mt: "100px", ml: "350px" }}>
            <Stack direction="row" alignItems="center">
                <Typography
                    variant="h4"
                    gutterBottom
                    style={{ marginBottom: 0 }}
                >
                    Restaurant Grape
                </Typography>
                <Link
                    href="https://www.instagram.com/grapecafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    style={{
                        color: "pink",
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "10px",
                    }}
                >
                    <InstagramIcon
                        sx={{ fontSize: 30, margin: 0, padding: 0 }}
                    />
                    <Typography
                        variant="h6"
                        component="span"
                        style={{
                            marginLeft: "5px",
                            marginTop: 0,
                            marginBottom: 0,
                        }}
                    >
                        Instagram
                    </Typography>
                </Link>
            </Stack>

            <Stack direction="row" sx={{ mt: "15px" }}>
                <Typography variant="body1" paragraph>
                    {t("restaurantDescription")}
                </Typography>{" "}
            </Stack>

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

            {/* Instagram icon with link */}
        </Container>
    );
};

export default Restaurant;
