import * as React from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { APP_URL } from '../../routes/Url';
import { BasicButton } from '../button/Button';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(stripe, elements)

    if (!stripe || !elements) return;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: APP_URL,
      },
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <BasicButton disabled={!stripe}>
        Next
      </BasicButton>
    </form>
  )
};

export default CheckoutForm;