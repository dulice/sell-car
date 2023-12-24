import React from "react";
import StripeCheckout from "react-stripe-checkout";
import CustomButton from "./CustomButton";

const Checkout = () => {
  const handleToken = (token, address) => {
    fetch(`${import.meta.env.VITE_PORT}`, {
      method: "post",
      body: JSON.stringify(token),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <StripeCheckout
        token={handleToken}
        stripeKey={import.meta.env.VITE_STRIPE_API_KEY}
        amount={96200 * 100}
        currency="USD"
        shippingAddress
      >
        <CustomButton type="fill" title="Buy Now" />
      </StripeCheckout>
    </>
  );
};

export default Checkout;
