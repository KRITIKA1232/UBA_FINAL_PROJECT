import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { API_BASE_URL } from "../../utils/config";

type font = {
    id: number;
    name: string;
    fileName: string;
};

type PreviewRowProps = {
    preview: {
        text: string;
        size: number;
        color: string;
        backgroundColor: string;
    };
    img: font;
};

function getFontFormat(fileName: string) {
    if (fileName.endsWith(".ttf")) return "truetype";
    if (fileName.endsWith(".otf")) return "opentype";
    if (fileName.endsWith(".woff")) return "woff";
    if (fileName.endsWith(".woff2")) return "woff2";
    return "";
}

function injectFontFace(fontName: string, fontUrl: string, format: string) {
    if (document.getElementById(`font-face-${fontName}`)) return;
    const style = document.createElement("style");
    style.id = `font-face-${fontName}`;
    style.innerHTML = `
        @font-face {
            font-family: "${fontName}";
            src: url("${fontUrl}") format("${format}");
            font-display: swap;
        }
    `;
    document.head.appendChild(style);
}

export default function PreviewRow({ preview, img }: PreviewRowProps) {
    const fontName = img.name;
    const fontUrl = `${API_BASE_URL.replace('/api', '')}/static/${img.fileName}`;
    const format = getFontFormat(img.fileName);

    useEffect(() => {
        injectFontFace(fontName, fontUrl, format);
    }, [fontName, fontUrl, format]);

    return (
        <Box
            sx={{
                background: "#222",
                borderRadius: 2,
                p: 3,
                minHeight: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                color: "#fff",
                width: "100%",
                overflowX: "auto"
            }}
        >
            <Typography
                sx={{
                    fontSize: preview.size,
                    color: preview.color,
                    fontFamily: `"${fontName}"`,
                    width: "100%",
                    textAlign: "left",
                    wordBreak: "break-word",
                    whiteSpace: "pre-line",
                }}
            >
                {preview.text}
            </Typography>
        </Box>
    );
}