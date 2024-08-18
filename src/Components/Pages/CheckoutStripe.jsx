// src/Components/CheckoutStripe.jsx
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Pages/CheckoutForm';

// Your publishable key from Stripe
const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutStripe = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default CheckoutStripe;
