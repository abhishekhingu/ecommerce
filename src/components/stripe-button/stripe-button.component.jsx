/** @format */

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey =
    'pk_test_51JJI99SCw1lrfzsh0XCpXsJHhCOtscgDdMroKwpNm6J3HjtkNQnB2ryKy3wbKxrYkYrvlQqaSqcZESPxMCbpaiBL00aV6zMeyS';
  const onToken = (token) => {
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      stripeKey={publishableKey}
      name='Crown Shopping Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel='Pay Now'
      token={onToken}
    />
  );
};

export default StripeButton;
