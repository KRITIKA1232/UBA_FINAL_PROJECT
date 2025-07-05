import { Box, TextField } from "@mui/material";
import type { preview } from "../../../types/previewTypes";

interface TypingAreaProps {
    preview: preview;
    setPreview: (p: preview) => void;
}


export default function TypingArea({ preview, setPreview }: TypingAreaProps) {
    return (
        <Box sx={{ 
            flex: 1, 
            maxWidth: 800,
            display: 'flex',
            justifyContent: 'center',
            ml: { xs: 2, md: 4 }
        }}>
            <TextField
                multiline
                value={preview.text}
                onChange={e => setPreview({ ...preview, text: e.target.value })}
                minRows={2}
                maxRows={4}
                variant="filled"
                placeholder="Type something..."
                sx={{ width: '100%', maxWidth: 600 }}
                InputProps={{ 
                    style: { 
                        color: "#fff", 
                        background: "#18191a",
                        fontSize: "14px",
                        borderRadius: "8px",
                        padding: "8px 10px"
                    } 
                }}
                InputLabelProps={{ style: { color: "#aaa" } }}
            />
        </Box>
    );
} 