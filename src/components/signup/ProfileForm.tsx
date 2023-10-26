import * as React from "react";
import { Box, Stack } from "@mui/material";
import InputWithLabel from "../form/InputWithLabel";
import { BasicButton } from "../button/Button";
import useCreateAccountStore from "../../hooks/zustand/CreateAccountStore";

interface ProfileFormProps {
  goToNextStep: () => void;
}

export const ProfileForm = ({ goToNextStep }: ProfileFormProps) => {
  const { profile, setProfile } = useCreateAccountStore((state) => ({
    profile: state.account.profile,
    setProfile: state.setProfile,
  }));

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    property: "firstName" | "lastName" | "email" | "password",
  ) => {
    setProfile({
      ...profile,
      [property]: e.target.value,
    });
  };

  const handleSubmit = () => goToNextStep();

  const isSubmitBtnDisabled =
    !profile.email.length || !profile.password.length || !profile.firstName.length || !profile.lastName.length;

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
        value={profile.firstName}
        onChange={(e) => handleChange(e, "firstName")}
      />

      <InputWithLabel
        label={"Last Name"}
        type="text"
        placeholder="Dubois"
        value={profile.lastName}
        onChange={(e) => handleChange(e, "lastName")}
      />

      <InputWithLabel
        label={"Email"}
        type="email"
        placeholder="johndubois06@mail.com"
        value={profile.email}
        onChange={(e) => handleChange(e, "email")}
      />

      <InputWithLabel
        label={"Password"}
        type="password"
        placeholder="********"
        value={profile.password}
        onChange={(e) => handleChange(e, "password")}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          my: 2,
        }}
      >
        <BasicButton disabled={isSubmitBtnDisabled} onClick={handleSubmit}>
          Next
        </BasicButton>
      </Box>
    </Stack>
  );
};

export default ProfileForm;
