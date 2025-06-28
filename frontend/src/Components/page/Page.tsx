import { Box, Typography} from "@mui/material";
import PreviewList from "../fontPreview/PreviewList.tsx";
import { useEffect, useState } from "react";

import type { preview } from "../../types/previewTypes.ts";

import { useSearchParams } from "react-router-dom";
import getFonts from "../../api/getFonts";

import Header from "./Headerpage/Header";
import Filter from "./Filterpage/Filter";

const initialPreview: preview = {
    text: "",
    size: 30,
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
    const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

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
            minHeight: "100vh",
            width: "100vw",
            background: "#18191a",
            display: "flex",
            flexDirection: "column"
        }}>
            <Header preview={preview} setPreview={setPreview} setFilterDrawerOpen={setFilterDrawerOpen} />
            <Box sx={{
                flex: 1,
                width: "100%",
                overflowY: "auto",
                overflowX: "hidden",
                pl: { xs: 10, md: 12 },
                pr: { xs: 10, md: 12 },
                pt: { xs: 2, md: 4 },
                pb: { xs: 6, md: 8 },
                boxSizing: "border-box"
            }}>
                {loading ? (
                    <Typography color="#fff">Loading fonts...</Typography>
                ) : (
                    <PreviewList preview={preview} fonts={fonts} />
                )}
            </Box>
            <Filter
                preview={preview}
                setPreview={setPreview}
                filterDrawerOpen={filterDrawerOpen}
                setFilterDrawerOpen={setFilterDrawerOpen}
                initialPreview={initialPreview}
            />
        </Box>
    );
}

export default Page;