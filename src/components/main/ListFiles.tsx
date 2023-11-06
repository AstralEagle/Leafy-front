import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import ListItem, {dataItem} from "./ListItem";
import WidgetFile from "./WidgetFile";

interface Props {
    data: dataItem[];
}

const ListFiles = ({data}: Props) => {

    const [menuSelected, setMenuSelected] = useState<string>("");
    const [sortValue, setSortValue] = useState<number>(0);

    return (
        <Box sx={{flex: "1", display: "flex", flexDirection: "column", alignItems: "center", overflow: "hidden"}}>
            <Box sx={{flex: 1, display: "flex", flexDirection: "column", alignItems: "center", py: "46px", gap: "46px", overflow: "hidden"}}>
                <Box sx={{display: "flex", gap: "40px", mx: "60px"}}>
                    {["", "audio", "video", "image"].map((x: string, i) => (
                        <WidgetFile key={i} type={x} isSelected={menuSelected === x}
                                    onClick={() => setMenuSelected(x)}/>
                    ))}
                </Box>
                <Box sx={{flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", width: "100%", gap: "15px"}}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            borderRadius: "20px",
                            px: "18px",
                            py: "10px",
                            color: "#999999"
                        }}
                    >
                        <Box className="icons" sx={{width: "45px"}}></Box>
                        <Box className="name" sx={{flex: 5, overflowX: "hidden"}} onClick={() => {setSortValue(sortValue === 1 ? 0: 1)}}>
                            <Typography sx={{fontWeight: sortValue == 1 ? 600: undefined}}>Name</Typography>
                        </Box>
                        <Box className="size" sx={{flex: 1}} onClick={() => {setSortValue(sortValue === 2 ? 0: 2)}}>
                            <Typography sx={{fontWeight: sortValue == 2 ? 600: undefined}}>Size</Typography>
                        </Box>
                        <Box className="date" sx={{flex: 1}} onClick={() => {setSortValue(sortValue === 3 ? 0: 3)}}>
                            <Typography sx={{fontWeight: sortValue == 3 ? 600: undefined}}>Date added</Typography>
                        </Box>
                        <Box className="action" sx={{width: "80px"}}>
                        </Box>
                    </Box>
                    <Box sx={{flex: 1, display: "flex", flexDirection: "column", overflowY: "hidden"}}>
                        <Box sx={{flex: 1, display: "flex", flexDirection: "column", overflowY: "scroll", gap: "8px", height: "100%"}}>
                            {
                                data.filter(x => x.type.includes(menuSelected)).sort(selectSortByValue(sortValue)).map((x: dataItem, i) => (
                                    <ListItem key={i} data={x}/>
                                ))
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const selectSortByValue = (sortedValue: number) => {
    switch (sortedValue) {
        case 1:
            return sortByName;
        case 2:
            return sortBySize;
        case 3:
            return sortByDate;
        default:
            return defaultSort;
    }
}

const defaultSort = ((a: dataItem, b: dataItem) => a.name.localeCompare(b.name))
const sortByName = ((a: dataItem, b: dataItem) => a.name.localeCompare(b.name))
const sortBySize = ((a: dataItem, b: dataItem) => b.size - a.size)
const sortByDate = ((a: dataItem, b: dataItem) => new Date(b.created).getTime() - new Date(a.created).getTime())


export default ListFiles;