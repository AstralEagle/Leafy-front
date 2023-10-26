import * as React from "react";
import { Box, FormGroup, Stack } from "@mui/material";
import InputWithLabel from "../form/InputWithLabel";
import { BasicButton } from "../button/Button";
import useCreateAccountStore from "../../hooks/zustand/CreateAccountStore";
import SelectCountry from "../SelectCountry";
import { CountryType } from "../../helpers/Countries";
import BasicLabel from "../form/BasicLabel";

interface AddressFormProps {
  goToNextStep: () => void;
}

export const AddressForm = ({ goToNextStep }: AddressFormProps) => {
  const { address, setAddress } = useCreateAccountStore((state) => ({
    address: state.account.address,
    setAddress: state.setAddress,
  }));

  const handleChange = (value: string | CountryType, property: "street" | "zipCode" | "city" | "country") => {
    setAddress({
      ...address,
      [property]: value,
    });
  };

  const handleSubmit = () => goToNextStep();

  const isSubmitBtnDisabled =
    !address.street.length ||
    !address.zipCode.length ||
    !address.city.length ||
    !address.country.code.length ||
    !address.country.label.length;

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
        value={address.street}
        onChange={(e) => handleChange(e.target.value, "street")}
      />

      <InputWithLabel
        label={"Zip Code"}
        placeholder="75013"
        value={address.zipCode}
        onChange={(e) => handleChange(e.target.value, "zipCode")}
      />

      <InputWithLabel
        label={"City"}
        placeholder="Paris"
        value={address.city}
        onChange={(e) => handleChange(e.target.value, "city")}
      />

      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <BasicLabel content="Country" />
        <SelectCountry value={address.country} onChange={(value) => handleChange(value, "country")} />
      </FormGroup>

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

export default AddressForm;
