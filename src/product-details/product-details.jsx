import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  // We use the useParams hook from react-router-dom to get the route parameters.
  // The name inside const should be exactly the same that we use in Routes in 'APP.jsx'
  const { imageCategory } = useParams(); 

  // We set up a state variable valueFromRoute using the useState hook to store the value from the route parameter.
  const [valueFromRoute, setValueFromRoute] = useState('');

  // We use the useEffect hook to update the state variable whenever the stringValue parameter changes.
  useEffect(() => {
    // Update the state variable when the route parameter changes
    setValueFromRoute(imageCategory);
  }, [imageCategory]);

  return (
    <div>Product Details works! image category is:  {valueFromRoute}</div>
  );
};

export default ProductDetails;
