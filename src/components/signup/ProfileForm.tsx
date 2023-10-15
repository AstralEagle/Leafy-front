import * as React from "react";
import { Box, Stack } from "@mui/material";
import InputWithLabel from "../form/InputWithLabel";
import { BasicButton, LoadingButton } from "../button/Button";

interface SignupApi {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface ProfileFormProps {
  goToNextStep: () => void;
}

export const ProfileForm = ({ goToNextStep }: ProfileFormProps) => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const [account, setAccount] = React.useState<SignupApi>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    property: "firstName" | "lastName" | "email" | "password",
  ) => {
    setAccount((prev) => ({
      ...prev,
      [property]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // TODO :
    // rqt d'inscription
    // setIsSubmitting(false)
    // redirect to billing address si rqt OK
    goToNextStep();
    // sinon message d'erreur
    // ! \\ supprimer setTimeout
    setTimeout(() => setIsSubmitting(false), 400);
  };

  const isSubmitBtnDisabled = !account.email.length || !account.password.length || !account.firstName.length || !account.lastName.length;

  return (
    <Stack
      spacing={{ xs: 2, md: 4 }}
      direction="column"
      useFlexGap
      flexWrap="wrap"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <InputWithLabel
        label={"First Name"}
        type="text"
        placeholder="John"
        value={account.firstName}
        onChange={(e) => handleChange(e, "firstName")}
      />

      <InputWithLabel
        label={"Last Name"}
        type="text"
        placeholder="Dubois"
        value={account.lastName}
        onChange={(e) => handleChange(e, "lastName")}
      />

      <InputWithLabel
        label={"Email"}
        type="email"
        placeholder="johndubois06@mail.com"
        value={account.email}
        onChange={(e) => handleChange(e, "email")}
      />

      <InputWithLabel
        label={"Password"}
        type="password"
        placeholder="********"
        onChange={(e) => handleChange(e, "password")}
      />

      <Box sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        my: 2
      }}>
        {isSubmitting ? (
          <LoadingButton />
        ) : (
          <BasicButton disabled={isSubmitting || isSubmitBtnDisabled} onClick={handleSubmit}>
            Next
          </BasicButton>
        )}
      </Box>
    </Stack>
  );
};

export default ProfileForm;
