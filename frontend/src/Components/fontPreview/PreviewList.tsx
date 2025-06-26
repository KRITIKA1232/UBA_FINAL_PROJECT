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

export default function PreviewList({ preview, fonts }: PreviewListProps) {
    const [copiedFont, setCopiedFont] = useState<string | null>(null);

    const handleCopy = (fontName: string) => {
        navigator.clipboard.writeText(fontName);
        setCopiedFont(fontName);
        setTimeout(() => setCopiedFont(null), 1200);
    };

    return (
        <Box sx={{ width: "100%", height: "100%" }}>
       
            {fonts.map((font, idx) => (
                <Box key={font.id} sx={{ mb: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Typography variant="subtitle1" sx={{ color: "#90caf9", fontWeight: 600, fontSize: 18 }}>
                            {font.name}
                        </Typography>
                        <Tooltip title={copiedFont === font.name ? "Copied!" : "Copy font name"}>
                            <IconButton
                                size="small"
                                sx={{ ml: 1, color: "#90caf9" }}
                                onClick={() => handleCopy(font.name)}
                            >
                                <ContentCopyIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <PreviewRow preview={preview} img={font} />
                    {idx < fonts.length - 1 && <Divider sx={{ my: 3, borderColor: "#333" }} />}
                </Box>
            ))}
        </Box>
    )
}