// src/components/LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";
import { MenuItem, Select } from "@mui/material";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Select
            value={i18n.language}
            onChange={handleChange}
            sx={{ color: "white" }}
        >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="sr">Serbian</MenuItem>
            <MenuItem value="ru">Russian</MenuItem>
            <MenuItem value="uk">Ukrainian</MenuItem>
        </Select>
    );
};

export default LanguageSwitcher;
