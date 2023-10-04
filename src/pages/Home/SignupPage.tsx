import React from "react";
import { Stack } from "@mui/material";
import SignupTitle from "../../components/signup/SignupTitle";
import SignupForm from "../../components/signup/SignupForm";
import HomeLayout from "../../layouts/HomeLayout";
import Stepper, { StepEnum } from "../../components/steps/Stepper";

const SignupPage = () => {
  return (
    <HomeLayout
      content={
        <Stack
          spacing={{ xs: 6 }}
          direction="column"
          useFlexGap
          flexWrap="wrap"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <SignupTitle />
          <Stepper currentStep={StepEnum.Profile}/>
          <SignupForm />
        </Stack>
      }
    />
  );
};

export default SignupPage;
