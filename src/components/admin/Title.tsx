import * as React from "react";
import {Box, Typography} from "@mui/material";
import * as COLORS from "../../style/colors";

import AdminIcon from "../../assets/images/admin_icon.svg";



export const AdminTitle = () => {
    return (
        <Box sx={{display:"flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Typography sx={{color: COLORS.yellow, flex: 1, fontSize: 36, fontWeight: 600}} >
                honee
            </Typography>
            <img src={AdminIcon}/>
        </Box>
    )
}

export default AdminTitle