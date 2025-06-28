import { Box, Typography } from "@mui/material";
import FontDownloadIcon from '@mui/icons-material/FontDownload';

export default function Logo() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <FontDownloadIcon sx={{ fontSize: 32, color: '#fff' }} />
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>Preview</Typography>
        </Box>
    );
} 