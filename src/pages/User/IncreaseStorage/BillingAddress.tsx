import * as React from "react";
import { Box, IconButton, Modal, Stack, Tooltip, Typography } from "@mui/material";
import useCreateAccountStore from "../../../hooks/zustand/CreateAccountStore";
import AddressForm from "../../../components/signup/AddressForm";
import { Close, ModeEdit } from "@mui/icons-material";
import Card from "../../../components/container/Card";
import { COLORS } from "../../../style/colors";

const BillingAddress = () => {
  const { profile, address } = useCreateAccountStore((state) => state.account);

  const [isModalOpened, setIsModalOpened] = React.useState<boolean>(false);

  const handleClose = () => {
    setIsModalOpened(false);
  };

  return (
    <>
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
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Stack
          direction="column"
          alignItems={"center"}
          sx={{
            background: "#F4F4F4",
            borderRadius: "20px",
            margin: "auto",
            padding: "1rem 2rem",
            minWidth: 500,
            maxWidth: "100%",
          }}
        >
          <Stack direction="row" justifyContent={"flex-end"} width={"100%"}>
            <Tooltip title="Close">
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Tooltip>
          </Stack>
          <Box
            component="h3"
            sx={{
              color: COLORS.royablBlue,
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            Edit your billing address
          </Box>
          <AddressForm
            submitButton={{
              content: "Confirm",
              onClick: () => {},
            }}
          />
        </Stack>
      </Modal>
    </>
  );
};

export default BillingAddress;
