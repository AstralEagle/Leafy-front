import * as React from "react";
import { Box, Button, IconButton, Modal, Stack, Tooltip, Typography } from "@mui/material";
import { COLORS } from "../../../style/colors";
import { Close, Error } from "@mui/icons-material";
import AddressForm from "../../../components/signup/AddressForm";
import { BasicButton } from "../../../components/button/Button";

export const DeleteAccount = () => {
  const [isModalOpened, setIsModalOpened] = React.useState<boolean>(false);

  const handleClose = () => {
    setIsModalOpened(false);
  };

  return (
    <>
      <Button
        color="secondary"
        onClick={() => setIsModalOpened(true)}
        sx={{
          color: COLORS.redBrown,
          textTransform: "unset",
          fontWeight: 600,
        }}
      >
        Delete your account
      </Button>

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
            background: "#fff",
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
          <Stack
            direction="column"
            gap={"1rem"}
            sx={{
              textAlign: "center",
              maxWidth: "100%",
              padding: "2rem 4rem",
              color: COLORS.redBrown,
              alignItems: "center",
              fontSize: "1.2rem",
            }}
          >
            <Error sx={{ fontSize: "4rem" }} />
            <Typography sx={{ fontWeight: 900 }}>Are you sure you want to delete your account ?</Typography>
            <Typography sx={{ fontWeight: 500 }}>
              All your data including your files will be definitly removed from the server.
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>This action is irreversible.</Typography>
            <Stack direction="row" gap="1rem">
              <BasicButton
                sx={{ backgroundColor: COLORS.redBrown, "&:hover": { backgroundColor: COLORS.redBrownDark } }}
                onClick={() => {}} // TODO : delete account endpoint
              >
                Delete
              </BasicButton>
              <BasicButton sx={{ backgroundColor: COLORS.babyBlue, color: COLORS.deepBlue }} onClick={handleClose}>
                Cancel
              </BasicButton>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};

export default DeleteAccount;
