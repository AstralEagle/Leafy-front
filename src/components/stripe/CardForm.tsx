import * as React from "react";
import { APP_URL } from "../../routes/Url";
import { BasicButton } from "../button/Button";
import { Box, CircularProgress, Stack } from "@mui/material";
import { PaymentElement } from "@stripe/react-stripe-js";

interface CardFormProps {
  stripe: any;
  elements: any;
  clientSecret: { client_secret: string };
}

const CardForm = ({ stripe, elements, clientSecret }: CardFormProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      billing_details: {
        address: {
          city: null,
          country: null,
          line1: null,
          line2: null,
          postal_code: null,
          state: null,
        },
        email: null,
        name: "Jane DOE",
        phone: null,
      },
      confirmParams: {
        return_url: APP_URL + "/signup",
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  };

  return (
    <Stack
      direction="column"
      gap={1}
      sx={{
        mb: "2rem",
        width: "100%",
      }}
    >
      <PaymentElement />
      <BasicButton onClick={handleSubmit} disabled={isLoading} fullWidth>
        {isLoading ? (
          <Box sx={{ alignItems: "center" }}>
            Paiement en cours
            <CircularProgress size={20} />
          </Box>
        ) : (
          "Payer"
        )}
      </BasicButton>
      {!!errorMessage && errorMessage}
    </Stack>
  );
};

export default CardForm;
