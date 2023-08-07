import * as React from "react";
import { LockOutlined, PersonOutline } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { InputWithIcon } from "../form/Input";
import { BasicButton } from "../button/button";
import * as COLORS from "../../style/colors";

export const LoginForm = () => (
  <Stack
    spacing={{ xs: 2, md: 6 }}
    direction="column"
    useFlexGap
    flexWrap="wrap"
    justifyContent={"space-between"}
    alignItems={"center"}
  >
    <InputWithIcon StartIcon={PersonOutline} placeholder="Enter email" />
    <InputWithIcon StartIcon={LockOutlined} type="password" placeholder="Password"/>
    <BasicButton>Login</BasicButton>
    <Box sx={{
      "span": {
        fontSize: "20px"
      }
    }}>
      <Typography
        component="span"
        sx={{
          color: COLORS.deepBlue,
          fontWeight: 300,
        }}
      >
        Don't have any account ?
      </Typography>
      {" "}
      <Box
        component="span"
        sx={{
          color: COLORS.darkOrange,
          fontWeight: 500,
          pointer: "cursor"
        }}
      >
        Sign up
      </Box>
    </Box>
  </Stack>
)

export default LoginForm