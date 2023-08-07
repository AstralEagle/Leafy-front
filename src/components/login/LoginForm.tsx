import * as React from "react";
import { LockOutlined, PersonOutline } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { InputWithIcon } from "../form/Input";
import { BasicButton, LoadingButton } from "../button/button";
import NoAccountLink from "./NoAccountLink";

interface LoginApi {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const [account, setAccount] = React.useState<LoginApi>({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, property: "email" | "password") => {
    setAccount((prev) => ({
      ...prev,
      [property]: e.target.value
    }))
  }

  const handleSubmit = () => {
    setIsSubmitting(true);
    // TODO : 
    // rqt de connexion
    // setIsSubmitting(false)
    // redirect to dashboard si rqt OK
    // sinon message d'erreur
    // ! \\ supprimer setTimeout
    setTimeout(() => setIsSubmitting(false), 400);
  }

  const isSubmitBtnDisabled = !account.email.length || !account.password.length;

  return (
    <Stack
      spacing={{ xs: 2, md: 6 }}
      direction="column"
      useFlexGap
      flexWrap="wrap"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <InputWithIcon
        StartIcon={PersonOutline}
        type="email"
        placeholder="Enter email"
        value={account.email}
        onChange={(e) => handleChange(e, "email")}
      />

      <InputWithIcon
        StartIcon={LockOutlined}
        type="password"
        placeholder="Password"
        onChange={(e) => handleChange(e, "password")}
      />

      {
        isSubmitting ?
        <LoadingButton />
        :
        <BasicButton
          disabled={isSubmitting || isSubmitBtnDisabled}
          onClick={handleSubmit}
        >
          Login
        </BasicButton>
      }

      <NoAccountLink />
    </Stack>
  )
}

export default LoginForm