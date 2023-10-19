import * as React from "react";
import { Elements, ElementsConsumer, useElements, useStripe } from "@stripe/react-stripe-js";
import { PresentationCard } from "./PresentationCard";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { AMOUNT_TTC } from "../../amount";

export const PaymentCreditCard = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_CLIENT_PUBLIC_STRIPE!);

  const options = React.useMemo((): StripeElementsOptions => ({
    mode: "payment",
    amount: AMOUNT_TTC,
    currency: "eur",
    appearance: {
      theme: "stripe",
    },
    clientSecret: undefined,
  }), []);
  
  const InjectedCheckoutForm = () => (
    <ElementsConsumer>
      {({ stripe, elements }) => (
          <PresentationCard
            elements={elements}
            stripe={stripe}
            isLoading={false} 
          />
      )}
    </ElementsConsumer>
  );

  return (
    <Elements stripe={stripePromise} options={options}>
      <InjectedCheckoutForm />
    </Elements>
  );
};
