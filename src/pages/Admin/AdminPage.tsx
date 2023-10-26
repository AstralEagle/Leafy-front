import React from "react";
import { Stack, Typography } from "@mui/material";
import HomeLayout from "../../layouts/HomeLayout";
import AdminLayout from "../../layouts/AdminLayout";

const LoginPage = () => {
    return (
        <AdminLayout
            content={
                <Stack
                    spacing={{ xs: 6 }}
                    direction="column"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Typography>Hey</Typography>
                </Stack>
            }
        />
    );
};

export default LoginPage;
