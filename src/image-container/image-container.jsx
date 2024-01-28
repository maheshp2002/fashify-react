import React from 'react';
import { NavLink } from 'react-router-dom';
import './image-container.css';

const ImageContainer = ({ image }) => {
  return (
    <NavLink to={`/product-details/${image.imageCategory}`} className="image-container rounded m-3">
      <img className='rounded' src={image.imageUrl} alt="ContainerImage" />
    </NavLink>
  );
};

export default ImageContainer;
