import { Box, Drawer } from "@mui/material";
import type { preview } from "../../../types/previewTypes";
import FilterHeader from "./FilterHeader";
import FontSizeSlider from "./FontSizeSlider";
import TextColorPicker from "./TextColorPicker";
import ResetButton from "./ResetButton";

interface FilterProps {
    preview: preview;
    setPreview: (p: preview) => void;
    filterDrawerOpen: boolean;
    setFilterDrawerOpen: (open: boolean) => void;
    initialPreview: preview;
}

export default function Filter({ preview, setPreview, filterDrawerOpen, setFilterDrawerOpen, initialPreview }: FilterProps) {
    return (
        <Drawer
            anchor="left"
            open={filterDrawerOpen}
            onClose={() => setFilterDrawerOpen(false)}
            PaperProps={{
                sx: {
                    width: { xs: "100%", sm: 320 },
                    background: "#232323",
                    color: "#fff"
                }
            }}
        >
            <Box sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
                <FilterHeader onClose={() => setFilterDrawerOpen(false)} />
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
                    <FontSizeSlider value={preview.size} onChange={size => setPreview({ ...preview, size })} />
                    <TextColorPicker color={preview.color} onChange={color => setPreview({ ...preview, color })} />
                    <Box sx={{ mt: "auto" }}>
                        <ResetButton onClick={() => {
                            setPreview(initialPreview);
                            setFilterDrawerOpen(false);
                        }} />
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
} 