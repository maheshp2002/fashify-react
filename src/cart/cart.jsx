import React from 'react';
import FormValidator from './path-to/FormValidator';

const Cart = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const inputConfig = [
    {
      type: 'text',
      id: 'field1',
      name: 'field1',
      label: 'Field 1',
      placeholder: 'Enter text',
    },
  ];

  return (
    <div>
      <h1>Cart</h1>
      <FormValidator inputs={inputConfig} onSubmit={onSubmit} />
    </div>
  );
};

export default Cart;
