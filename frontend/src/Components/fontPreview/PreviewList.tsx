import { Box, Typography } from "@mui/material";
import PreviewRow from "./previewRow";
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
    return (
        <Box sx={{ width: "100%" }}>
            {fonts.map((font, idx) => (
                <Box key={font.id} sx={{ mb: idx === fonts.length - 1 ? 0 : 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Typography variant="subtitle1" sx={{ color: "#1976d2", fontWeight: 600, fontSize: 18 }}>
                            {formatFontName(font.name)}
                        </Typography>
                    </Box>
                    <PreviewRow preview={preview} img={font} />
                    
                </Box>
            ))}
        </Box>
    )
}