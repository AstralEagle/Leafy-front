import * as React from "react";
import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import useCreateAccountStore from "../../../hooks/zustand/CreateAccountStore";
import AddressForm from "../../../components/signup/AddressForm";
import { ModeEdit } from "@mui/icons-material";
import Card from "../../../components/container/Card";
import { COLORS } from "../../../style/colors";

const BillingAddress = () => {
  const { profile, address } = useCreateAccountStore((state) => state.account);

  const [isModalOpened, setIsModalOpened] = React.useState<boolean>(false);

  const handleClose = () => {
    setIsModalOpened(false);
  };

  return (
    <Box sx={{ maxWidth: "90%" }}>
      <Card
        fullWidth
        content={
          <Stack direction="row" justifyContent={"space-between"} sx={{ padding: "1rem, 0.5rem" }}>
            <Stack direction="column" gap={1}>
              <Typography>
                {profile.firstName} {profile.lastName.toUpperCase()}
              </Typography>
              <Typography>
                {address.street} {address.zipCode} {address.city} {address.country.label}
              </Typography>
            </Stack>
            <IconButton onClick={() => setIsModalOpened(true)}>
              <ModeEdit sx={{ fill: COLORS.deepBlue }} />
            </IconButton>
          </Stack>
        }
      />
      <Modal
        open={isModalOpened}
        onClose={handleClose}
        aria-labelledby="modal-billingAddress"
        aria-describedby="parent-modal-billingAddress"
        sx={{ background: "#F4F4F4" }}
      >
        <Box>
          <AddressForm
            goToNextStep={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default BillingAddress;
