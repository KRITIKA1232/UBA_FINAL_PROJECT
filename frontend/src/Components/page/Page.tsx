import { Box, Button, Container, InputAdornment, Slider, TextField, Typography } from "@mui/material";
import PreviewList from "../fontPreview/PreviewList.tsx";
import { useEffect, useState } from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import type { preview } from "../../types/previewTypes.ts";
import ColorPicker from "../colorPicker/colorPicker.tsx";
import { useSearchParams } from "react-router-dom";
import getFonts from "../../api/getFonts";
import FontDownloadIcon from '@mui/icons-material/FontDownload';

const initialPreview: preview = {
    text: "",
    size: 40,
    color: "#fff",
    backgroundColor: "#222"
};

function Page() {
    const [searchParam, setParam] = useSearchParams();
    const text = searchParam.get("text") || "";
    const color = searchParam.get("color") || "";
    const backgroundColor = searchParam.get("bgColor") || "";
    const size = Number(searchParam.get("size") || NaN);

    const param: preview = {
        text: text || initialPreview.text,
        size: !isNaN(size) ? size : initialPreview.size,
        color: color || initialPreview.color,
        backgroundColor: backgroundColor || initialPreview.backgroundColor
    };

    const [preview, setPreview] = useState<preview>(param);
    const [fonts, setFonts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFonts().then(result => {
            if (result.status === 200) setFonts(result.message);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        const newParams = {
            text: preview.text,
            color: preview.color,
            bgColor: preview.backgroundColor,
            size: preview.size.toString(),
        };
        const delay = setTimeout(() => setParam(newParams), 200);
        return () => clearTimeout(delay);
    }, [preview]);

    return (
        <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            minHeight: "100vh",
            height: "100vh",
            width: "100vw",
            background: "#18191a"
        }}>
            {/* Sidebar */}
            <Box sx={{
                width: { xs: "100%", md: 320 },
                minWidth: 0,
                background: "#232323",
                color: "#fff",
                p: { xs: 2, md: 3 },
                borderRight: { md: "1px solid #333" },
                borderBottom: { xs: "1px solid #333", md: "none" },
                display: "flex",
                flexDirection: "column",
                gap: 3,
                alignItems: "stretch",
                boxSizing: "border-box"
            }}>
                {/* Logo with icon */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FontDownloadIcon sx={{ fontSize: 32, color: '#90caf9', mr: 1 }} />
                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700 }}>Preview</Typography>
                </Box>
                <TextField
                    multiline
                    value={preview.text}
                    onChange={e => setPreview({ ...preview, text: e.target.value })}
                    minRows={3}
                    maxRows={6}
                    variant="filled"
                    placeholder="Type something..."
                    InputProps={{ style: { color: "#fff", background: "#232323" } }}
                    InputLabelProps={{ style: { color: "#aaa" } }}
                />
                <Box>
                    <Typography gutterBottom>Size</Typography>
                    <Slider
                        min={8}
                        max={120}
                        value={preview.size}
                        onChange={(_, value) => setPreview({ ...preview, size: value })}
                        sx={{ color: "#90caf9" }}
                    />
                    <Typography>{preview.size}px</Typography>
                </Box>
                <Button
                    variant="outlined"
                    color="inherit"
                    startIcon={<RestartAltIcon />}
                    onClick={() => setPreview(initialPreview)}
                >
                    Reset all
                </Button>
            </Box>
            {/* Main Content */}
            <Box sx={{
                flex: 1,
                width: "100%",
                minHeight: "100vh",
                overflowY: "auto",
                overflowX: "hidden",
                p: { xs: 2, md: 4 },
                boxSizing: "border-box"
            }}>
                {loading ? (
                    <Typography color="#fff">Loading fonts...</Typography>
                ) : (
                    <PreviewList preview={preview} fonts={fonts} />
                )}
            </Box>
        </Box>
    );
}

export default Page;