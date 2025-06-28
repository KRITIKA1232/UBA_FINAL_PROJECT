import { Box, Typography, Slider } from "@mui/material";

interface FontSizeSliderProps {
    value: number;
    onChange: (value: number) => void;
}

export default function FontSizeSlider({ value, onChange }: FontSizeSliderProps) {
    return (
        <Box>
            <Typography gutterBottom sx={{ color: "#fff", mb: 2 }}>
                Font Size
            </Typography>
            <Slider
                min={8}
                max={120}
                value={value}
                onChange={(_, v) => onChange(v as number)}
                sx={{ color: "#1976d2" }}
            />
            <Typography sx={{ color: "#aaa", textAlign: "center" }}>
                {value}px
            </Typography>
        </Box>
    );
} 