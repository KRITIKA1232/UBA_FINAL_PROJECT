import { Box, Typography } from "@mui/material";
import ColorPicker from "../../colorPicker/colorPicker";

interface TextColorPickerProps {
    color: string;
    onChange: (color: string) => void;
}

export default function TextColorPicker({ color, onChange }: TextColorPickerProps) {
    return (
        <Box>
            <Typography gutterBottom sx={{ color: "#fff", mb: 2 }}>
                Text Color
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <ColorPicker
                    color={color}
                    onChange={onChange}
                />
            </Box>
        </Box>
    );
} 