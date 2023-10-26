import {Search} from "@mui/icons-material";
import {Box, Grid, IconButton, InputAdornment, InputBase, Paper, Stack, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import AdminTitle from "../components/admin/Title";
import * as COLORS from "../style/colors";
import AdminUserItem from "../components/admin/UserItem";

interface HomepageProps {
    content: JSX.Element;
}

const userData = {firstName: "Arthur", lastName: "Dias", uid: "test", storage: 120}


const HomeLayout = ({content}: HomepageProps) => {

    const [userSelected, setUserSelected] = useState("");

    return (
        <Grid container sx={{height: "100vh", background: "#05162F"}}>
            <Grid item xs={0} md={3} sx={{px: "24px", py: "40px", position: "relative"}}>
                <Box sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <AdminTitle/>
                    <Box>
                        <Paper
                            component="form"
                            sx={{p: '2px 15px', display: 'flex', alignItems: 'center', flex: 1, borderRadius: 10}}
                        >
                            <Search/>
                            <InputBase
                                sx={{ml: 1, flex: 1}}
                                placeholder="Search"
                            />
                        </Paper>
                    </Box>
                    <Box>
                        <Box sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
                            {
                                new Array(6).fill(userData).map((x, i) => (
                                    <AdminUserItem userSelected={userSelected} changeUser={(x: string) => setUserSelected(x)} user={x} key={i}/>
                                ))
                            }
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={9}>
                {content}
            </Grid>
        </Grid>
    )
}

export default HomeLayout;