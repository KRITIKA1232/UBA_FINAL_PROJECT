import { Box, Typography, IconButton, Tooltip, Divider } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PreviewRow from "./previewRow";
import { useState } from "react";
import type { preview } from "../../types/previewTypes";

type font = {
    id: number,
    name: string,
    fileName: string
}

type PreviewListProps = {
    preview: preview;
    fonts: font[];
};

function formatFontName(name: string) {
    return name
        .replace(/-VariableFont.*$/i, "")
        .replace(/-Regular$/i, "")
        .replace(/_/g, " ")
        .replace(/-/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, c => c.toUpperCase());
}

export default function PreviewList({ preview, fonts }: PreviewListProps) {
    const [copiedFont, setCopiedFont] = useState<number | null>(null);

    const handleCopy = (fontId: number, text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedFont(fontId);
        setTimeout(() => setCopiedFont(null), 1200);
    };

    return (
        <Box sx={{ width: "100%" }}>
            {fonts.map((font, idx) => (
                <Box key={font.id} sx={{ mb: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Typography variant="subtitle1" sx={{ color: "#1976d2", fontWeight: 600, fontSize: 18 }}>
                            {formatFontName(font.name)}
                        </Typography>
                    </Box>
                    <PreviewRow preview={preview} img={font} />
                    {idx < fonts.length - 1 && <Divider sx={{ my: 3, borderColor: "#eee" }} />}
                </Box>
            ))}
        </Box>
    )
}