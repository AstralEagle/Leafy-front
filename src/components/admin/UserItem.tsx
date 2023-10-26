import * as React from "react";
import {Paper, Typography} from "@mui/material";
import * as COLORS from "../../style/colors";

interface User {
    uid: string;
    firstName: string;
    lastName: string;
    storage: number;
}

interface Props {
    user: User;
    changeUser: (x: string) => void;
    userSelected: string;
}

export const AdminUserItem = ({user, changeUser, userSelected}: Props) => {
    return (
        <Paper
            sx={{
                height: "40px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#0E203A",
                borderRadius: "10px",
                px: "15px"
            }}>
            <Typography sx={{color: "white", flex: 1, fontSize: 15}}>
                {user.firstName}
            </Typography>
            <Typography sx={{color: "white", flex: 1, fontSize: 15}}>
                {user.lastName}
            </Typography>
            <Typography sx={{ width: "50px", color: "white", flex: 1, fontSize: 15}}>
                {user.storage}Go
            </Typography>


        </Paper>
    )
}

export default AdminUserItem