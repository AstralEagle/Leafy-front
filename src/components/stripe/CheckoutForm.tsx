import * as React from "react";
import { CardCvcElement, CardExpiryElement, CardNumberElement } from "@stripe/react-stripe-js";
import { BasicButton } from "../button/Button";
import { Alert, Box, CircularProgress, Stack } from "@mui/material";
import BasicLabel from "../form/BasicLabel";
import useCreateAccountStore from "../../hooks/zustand/CreateAccountStore";
import { CARD_NUMBER_OPTIONS, CARD_EXPIRY_OPTIONS, CARD_CVC_OPTIONS } from "./CardElements";
import InputWithLabel from "../form/InputWithLabel";
import { COLORS } from "../../style/colors";
import { API_URL } from "../../routes/Url";
import axios from "axios";
import { isTokenValid } from "../../Config/Auth";
import { useNavigate } from "react-router-dom";

interface CheckoutFormProps {
  stripe: any;
  elements: any;
  clientSecret: { client_secret: string };
}

// TODO:
// verifier le format email et telephone

const CheckoutForm = ({ stripe, elements, clientSecret }: CheckoutFormProps) => {
  const navigate = useNavigate();
  const { address, profile } = useCreateAccountStore((state) => state.account);

  const [billingEmail, setBillingEmail] = React.useState<string>(profile.email);

  const [billingName, setBillingName] = React.useState<string>(
    profile.firstName || profile.lastName ? profile.firstName + " " + profile.lastName.toUpperCase() : "",
  );

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();
  const [elementsCardValidity, setElementsCardValidity] = React.useState({
    cardNumber: false,
    cardExpiry: false,
    cardCvc: false,
  });

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmCardPayment(clientSecret.client_secret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          address: {
            city: address.city,
            country: address.country.code,
            line1: address.street,
            postal_code: address.zipCode,
          },
          email: billingEmail,
          name: billingName,
        },
      },
      setup_future_usage: "off_session",
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      try {
        const billingAddress = {
          zip: address.zipCode,
          country: address.country.code,
          city: address.city,
          address: address.street,
        };

        const response = await axios({
          method: "post",
          url: API_URL + "/auth/signup",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: {
            ...profile,
            ...billingAddress,
          },
        });

        localStorage.setItem("token", response.data.userToken.toString());
        isTokenValid() ? navigate("/dashboard") : navigate("/login");
      } catch (err) {
        console.log(err);
        // TODO : handle error + toast
      }
    }

    setIsLoading(false);
  };

  const isDisabled =
    Object.values(elementsCardValidity).includes(false) ||
    !billingName ||
    !billingName.length ||
    !billingEmail ||
    !billingEmail.length;

  return (
    <Stack
      direction="column"
      gap={1}
      sx={{
        mb: "2rem",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <BasicLabel content="CardNumber" />
      <CardNumberElement
        options={CARD_NUMBER_OPTIONS}
        id="CardNumber"
        onChange={({ error, empty }) =>
          setElementsCardValidity((prev) => ({
            ...prev,
            cardNumber: error === undefined && !empty,
          }))
        }
      />
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        sx={{
          gap: 2,
          mb: 2,
        }}
      >
        <Stack direction="column" gap={1} width={{ xs: "100%", md: "50%" }}>
          <BasicLabel content="Expiration date" />
          <CardExpiryElement
            options={CARD_EXPIRY_OPTIONS}
            id="CardExpiry"
            onChange={({ error, empty }) =>
              setElementsCardValidity((prev) => ({
                ...prev,
                cardExpiry: error === undefined && !empty,
              }))
            }
          />
        </Stack>
        <Stack direction="column" gap={1} width={{ xs: "100%", md: "50%" }}>
          <BasicLabel content="CVC" />
          <CardCvcElement
            options={CARD_CVC_OPTIONS}
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

      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        sx={{
          gap: 2,
          mb: 4,
        }}
      >
        <Stack width={{ xs: "100%", md: "50%" }}>
          <InputWithLabel
            label={"Name on card"}
            type="text"
            placeholder="John DOE"
            value={billingName}
            onChange={(e) => setBillingName(e.target.value)}
          />
        </Stack>

        <Stack width={{ xs: "100%", md: "50%" }}>
          <InputWithLabel
            label={"Email"}
            type="email"
            placeholder="johndoe@mail.com"
            value={billingEmail}
            onChange={(e) => setBillingEmail(e.target.value)}
          />
        </Stack>
      </Stack>

      <BasicButton
        onClick={handleSubmit}
        disabled={isLoading || isDisabled}
        fullWidth
        customColor={COLORS.darkRoyalBlue}
      >
        {isLoading ? (
          <Box sx={{ alignItems: "center" }}>
            Paiement en cours
            <CircularProgress size={20} />
          </Box>
        ) : (
          "Pay now"
        )}
      </BasicButton>

      {!!errorMessage && (
        <Alert severity="error" sx={{ mt: 1 }}>
          {errorMessage}
        </Alert>
      )}
    </Stack>
  );
};

export default CheckoutForm;
