import * as React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { BasicButton } from '../button/Button';
import { AMOUNT_TTC } from '../../amount';
import axios from "axios";
import { secret } from '../../routes/Api';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = React.useState<string>("");
  const [paymentIntentId, setPaymentIntentId] = React.useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (error) {
      console.error(error);
    } else {
      console.log('PaymentIntent was successful:', paymentIntent);
    }
  };

  React.useEffect(() => {
    secret({ amount: AMOUNT_TTC, 
      onSuccess: (response: any) => {
        setClientSecret(response.data.clientSecret);
        setPaymentIntentId(response.data.paymentIntentId);
      },
      onError : (error: Error) => {
        console.error('Error fetching client secret:', error);
      }
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <BasicButton disabled={!stripe}>
        Pay
      </BasicButton>
    </form>
  )
};

export default CheckoutForm;