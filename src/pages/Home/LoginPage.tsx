import React from "react";
import { Stack } from "@mui/material";
import LoginTitle from "../../components/login/LoginTitle";
import LoginForm from "../../components/login/LoginForm";

const LoginPage = () => {
  return (
    <Stack
      spacing={{ xs: 6 }}
      direction="column"
      useFlexGap
      flexWrap="wrap"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <LoginTitle />
      <LoginForm />
    </Stack>
  );
};

export default LoginPage;
