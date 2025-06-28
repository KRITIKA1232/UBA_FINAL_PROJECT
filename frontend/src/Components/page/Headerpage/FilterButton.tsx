import { Button } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';

interface FilterButtonProps {
    onClick: () => void;
}

export default function FilterButton({ onClick }: FilterButtonProps) {
    return (
        <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            onClick={onClick}
            sx={{
                color: "#fff",
                borderColor: "#444",
                "&:hover": {
                    borderColor: "#1976d2",
                    backgroundColor: "rgba(25, 118, 210, 0.1)"
                },
                flexShrink: 0
            }}
        >
            Filter
        </Button>
    );
} 