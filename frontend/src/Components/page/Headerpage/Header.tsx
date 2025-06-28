import { Box } from "@mui/material";
import type { preview } from "../../../types/previewTypes";
import FilterButton from "./FilterButton";
import Logo from "./Logo";
import TypingArea from "./TypingArea";

interface HeaderProps {
    preview: preview;
    setPreview: (p: preview) => void;
    setFilterDrawerOpen: (open: boolean) => void;
}

export default function Header({ preview, setPreview, setFilterDrawerOpen }: HeaderProps) {
    return (
        <Box sx={{
            background: "#232323",
            borderBottom: "1px solid #333",
            p: { xs: 1, md: 2 },
            display: "flex",
            alignItems: "center",
            gap: 3
        }}>
            <FilterButton onClick={() => setFilterDrawerOpen(true)} />
            <Box sx={{ width: { xs: 2, md: 4 }, flexShrink: 0 }} />
            <Logo />
            <TypingArea preview={preview} setPreview={setPreview} />
        </Box>
    );
} 