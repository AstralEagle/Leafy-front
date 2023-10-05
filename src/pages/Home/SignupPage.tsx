import * as React from "react";
import { Stack } from "@mui/material";
import SignupTitle from "../../components/signup/SignupTitle";
import SignupForm from "../../components/signup/SignupForm";
import HomeLayout from "../../layouts/HomeLayout";
import Stepper, { StepEnum } from "../../components/steps/Stepper";
import PurchaseForm from "../../components/signup/PurchaseForm";
import AddressForm from "../../components/signup/AddressForm";

const SignupPage = () => {
  const [currentStep, setCurrentStep] = React.useState<StepEnum>(StepEnum.Profile);

  return (
    <HomeLayout
      content={
        <Stack
          spacing={{ xs: 6 }}
          direction="column"
          useFlexGap
          flexWrap="wrap"
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <SignupTitle />
          <Stepper currentStep={currentStep} />

          {currentStep === StepEnum.Profile && <SignupForm goToNextStep={() => setCurrentStep(StepEnum.Payment)} />}

          {currentStep === StepEnum.Payment && <PurchaseForm goToNextStep={() => setCurrentStep(StepEnum.Address)} />}

          {currentStep === StepEnum.Address && <AddressForm goToNextStep={() => setCurrentStep(StepEnum.Finalization)} />}
        </Stack>
      }
    />
  );
};

export default SignupPage;
