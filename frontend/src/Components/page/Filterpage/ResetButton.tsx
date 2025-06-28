import { Button } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface ResetButtonProps {
    onClick: () => void;
}

export default function ResetButton({ onClick }: ResetButtonProps) {
    return (
        <Button
            variant="outlined"
            color="inherit"
            startIcon={<RestartAltIcon />}
            onClick={onClick}
            fullWidth
            sx={{
                color: "#fff",
                borderColor: "#444",
                "&:hover": {
                    borderColor: "#1976d2",
                    backgroundColor: "rgba(25, 118, 210, 0.1)"
                }
            }}
        >
            Reset all
        </Button>
    );
} 