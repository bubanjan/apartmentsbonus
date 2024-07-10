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
import InstagramIcon from "@mui/icons-material/Instagram";
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
        <Container
            sx={{
                mt: { xs: "20px", md: "100px" },
                ml: { xs: "10px", md: "350px" },
            }}
        >
            <Stack direction="row" alignItems="center">
                <Typography variant="h4" gutterBottom>
                    Restaurant Grape
                </Typography>
                <Link
                    href="https://www.instagram.com/grapecafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                        color: "pink",
                        display: "flex",
                        alignItems: "center",
                        ml: "10px",
                    }}
                >
                    <InstagramIcon sx={{ fontSize: 30 }} />
                    <Typography
                        variant="h6"
                        component="span"
                        sx={{ ml: "5px" }}
                    >
                        Instagram
                    </Typography>
                </Link>
            </Stack>

            <Typography variant="body1" paragraph sx={{ mt: "15px" }}>
                {t("restaurantDescription")}
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
                        height: { xs: "auto", md: "300px" },
                        objectFit: "cover",
                        borderRadius: "2px",
                        mt: 2,
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
