import * as React from "react";
import { CardCvcElement, CardExpiryElement, CardNumberElement } from "@stripe/react-stripe-js";
import { StripeCardElementOptions } from "@stripe/stripe-js";
import { Box, CircularProgress, Stack } from "@mui/material";
import { BasicButton } from "../button/Button";
import BasicLabel from "../form/BasicLabel";
import { APP_URL } from "../../routes/Url";

interface Props {
  isLoading: boolean;
  elements?: any;
  stripe?: any;
}

export const PresentationCard = ({ isLoading, stripe, elements }: Props) => {

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: APP_URL,
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      
    }
  };
  
  const [elementsCardValidity, setElementsCardValidity] = React.useState({
    cardNumber: false,
    cardExpiry: false,
    cardCvc: false,
  });

  const isDisabled = Object.values(elementsCardValidity).includes(false);

  const CARD_NUMBER_OPTIONS: StripeCardElementOptions = {
    style: {
      empty: {
        backgroundColor: "#FAFAFB",
      },
      base: {
        backgroundColor: "#FAFAFB",
        fontSize: "16px",
        "::placeholder": {},
      },
      invalid: {
        iconColor: "#fa755a",
      },
    },
  };

  const CARD_CVC_OPTIONS: StripeCardElementOptions = {
    style: {
      empty: {
        backgroundColor: "#FAFAFB",
      },
      base: {
        backgroundColor: "#FAFAFB",
        fontSize: "16px",
        "::placeholder": {},
      },
      invalid: {
        iconColor: "#fa755a",
      },
    },
  };

  const CARD_EXPIRY_OPTIONS: StripeCardElementOptions = {
    style: {
      empty: {
        backgroundColor: "#FAFAFB",
      },
      base: {
        backgroundColor: "#FAFAFB",
        fontSize: "16px",
        "::placeholder": {},
      },
      invalid: {
        iconColor: "#fa755a",
      },
    },
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
      <BasicLabel content="CardNumber" />
      <CardNumberElement
        options={CARD_NUMBER_OPTIONS}
        className="form-control-secondary"
        id="CardNumber"
        onChange={({ error, empty }) =>
          setElementsCardValidity((prev) => ({
            ...prev,
            cardNumber: error === undefined && !empty,
          }))
        }
      />
      <Stack
        direction="row"
        sx={{
          gap: 2,
          mb: 2,
        }}
      >
        <Stack direction="column" gap={1} sx={{ width: "50%" }}>
          <BasicLabel content="Expiration date" />
          <CardExpiryElement
            options={CARD_EXPIRY_OPTIONS}
            className="form-control-secondary"
            id="CardExpiry"
            onChange={({ error, empty }) =>
              setElementsCardValidity((prev) => ({
                ...prev,
                cardExpiry: error === undefined && !empty,
              }))
            }
          />
        </Stack>
        <Stack direction="column" gap={1} sx={{ width: "50%" }}>
          <BasicLabel content="CVC" />
          <CardCvcElement
            options={CARD_CVC_OPTIONS}
            className="form-control-secondary"
            id="CardCvc"
            onChange={({ error, empty }) =>
              setElementsCardValidity((prev) => ({
                ...prev,
                cardCvc: error === undefined && !empty,
              }))
            }
          />
        </Stack>
      </Stack>
      <BasicButton onClick={handleSubmit} disabled={isLoading || isDisabled} fullWidth>
        {isLoading ? (
          <Box sx={{ alignItems: "center" }}>
            Paiement en cours
            <CircularProgress size={20} />
          </Box>
        ) : (
          "Payer"
        )}
      </BasicButton>
    </Stack>
  );
};
