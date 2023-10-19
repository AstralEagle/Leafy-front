import { CircularProgress } from "@mui/material";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import * as React from "react";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import { API_URL } from "../../routes/Url";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51Ny9HwHoQWeOEuYmBANT6VMcajclqFk0sye4rCAXhk7rv3d3BoQ0XExVLBrMtBxbAwH74G6pl45FYCBpIyG6oBR200e9lF87iT",
);

const Payment = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [clientSecret, setClientSecret] = React.useState<{client_secret: string} | undefined>();

  const options: StripeElementsOptions = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret?.client_secret,
    appearance: {
      theme: "stripe",
    },
  };

  const getClientSecret = async () => {
    try {
      const response = await axios({
        method: "post",
        url: API_URL + "/payment/secret",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {},
      });

      setClientSecret(response.data);
      setIsLoading(false);
    } catch (e: any) {
      console.error(e);
      // ToDO : gérer affichage en cas d'erreur
    }
  };

  React.useEffect(() => {
    getClientSecret();
  }, []);

  return isLoading ? (
    <CircularProgress />
  ) : !!clientSecret ? (
    <Elements stripe={stripePromise} options={options}>
      <ElementsConsumer>
        {({ stripe, elements }) => <CheckoutForm stripe={stripe} elements={elements} clientSecret={clientSecret} />}
      </ElementsConsumer>
    </Elements>
  ) : (
    <></>
  );
};

export default Payment;
