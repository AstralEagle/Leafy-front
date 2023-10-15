import * as React from "react";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { PresentationCard } from "./PresentationCard";
import { loadStripe } from "@stripe/stripe-js";

export const PaymentCreditCard = () => {
  const InjectedCheckoutForm = () => (
    <ElementsConsumer>
      {({ stripe, elements }) => (
          <PresentationCard
          onClick={() => {}}
          elements={elements}
          stripe={stripe} isLoading={false} />
      )}
    </ElementsConsumer>
  );

  return (
    <Elements stripe={loadStripe(process.env.REACT_APP_CLIENT_PUBLIC_STRIPE!)}>
      <InjectedCheckoutForm />
    </Elements>
  );
};
