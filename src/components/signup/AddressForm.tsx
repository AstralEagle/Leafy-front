import * as React from "react";
import { Box, Stack } from "@mui/material";
import InputWithLabel from "../form/InputWithLabel";
import { BasicButton, LoadingButton } from "../button/button";

interface AddressApi {
  street: string;
  zipCode: string;
  city: string;
  country: string;
}

interface AddressFormProps {
  goToNextStep: () => void;
}

export const AddressForm = ({ goToNextStep }: AddressFormProps) => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const [account, setAccount] = React.useState<AddressApi>({
    street: "",
    zipCode: "",
    city: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    property: "street" | "zipCode" | "city" | "country",
  ) => {
    setAccount((prev) => ({
      ...prev,
      [property]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    goToNextStep();
    // ! \\ supprimer setTimeout
    setTimeout(() => setIsSubmitting(false), 400);
  };

  const isSubmitBtnDisabled =
    !account.street.length || !account.zipCode.length || !account.city.length || !account.country.length;

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
        label={"Street Address"}
        placeholder="75 rue du Javelot"
        value={account.street}
        onChange={(e) => handleChange(e, "street")}
      />

      <InputWithLabel
        label={"Zip Code"}
        placeholder="75013"
        value={account.zipCode}
        onChange={(e) => handleChange(e, "zipCode")}
      />

      <InputWithLabel
        label={"City"}
        placeholder="Paris"
        value={account.city}
        onChange={(e) => handleChange(e, "city")}
      />

      <InputWithLabel
        label={"Country"}
        placeholder="France"
        value={account.country}
        onChange={(e) => handleChange(e, "country")}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          my: 2,
        }}
      >
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

export default AddressForm;
