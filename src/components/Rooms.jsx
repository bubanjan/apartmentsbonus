import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    Container,
    Typography,
    Grid,
    Box,
    Button,
    ButtonBase,
} from "@mui/material";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Rooms = () => {
    const { t } = useTranslation();

    const rooms = t("rooms", { returnObjects: true });

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
            <Grid container spacing={0.5}>
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
                                        marginTop: 0,
                                        padding: 0,
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
                                    sx={{ height: 25, flex: 1 }}
                                    onClick={() => openLightbox(room.folder)}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: "12px" }}
                                    >
                                        {t("viewGallery")}
                                    </Typography>
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "darkGreen",
                                        color: "white",
                                        height: 25,
                                        flex: 1,
                                    }}
                                    component={Link}
                                    to="/book-room"
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: "12px" }}
                                    >
                                        {t("bookRoom")}
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
