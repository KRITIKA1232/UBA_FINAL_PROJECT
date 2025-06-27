import { useEffect, useState } from "react";
import { Box } from "@mui/material";
interface colorPickerProps {
    color: string,
    onChange: (color: string) => void,
}
function ColorPicker({ color, onChange }: colorPickerProps) {
    const [colorValue, setColorValue] = useState(color);

    useEffect(() => {
        setColorValue(color);
    }, [color]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColorValue(e.target.value);
        onChange(e.target.value);
    }
    return (
        <Box sx={{ border: '2px solid #1976d2', borderRadius: 2, p: 0.5, display: 'inline-block' }}>
            <input
                type="color"
                value={colorValue}
                onChange={handleChange}
                style={{
                    width: 40,
                    height: 40,
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    padding: 0,
                    display: 'block'
                }}
                aria-label="Select text color"
            />
        </Box>
    )
}

export default ColorPicker;