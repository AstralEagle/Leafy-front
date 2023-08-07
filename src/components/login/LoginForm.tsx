import * as React from "react";
import { LockOutlined, PersonOutline } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { InputWithIcon } from "../form/Input";

export const LoginForm = () => (
  <Stack spacing={{ xs: 2 }} direction="column" useFlexGap flexWrap="wrap">
      <InputWithIcon StartIcon={PersonOutline} placeholder="Enter email" />
      <InputWithIcon StartIcon={LockOutlined} type="password" placeholder="Password"/>
  </Stack>
)

export default LoginForm