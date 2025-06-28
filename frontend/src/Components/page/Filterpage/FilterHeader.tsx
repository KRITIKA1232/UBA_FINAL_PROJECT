import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface FilterHeaderProps {
    onClose: () => void;
}

export default function FilterHeader({ onClose }: FilterHeaderProps) {
    return (
        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", mb: 3 }}>
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
                Filter Options
            </Typography>
            <IconButton 
                onClick={onClose}
                sx={{ color: "#aaa" }}
            >
                <CloseIcon />
            </IconButton>
        </Box>
    );
} 