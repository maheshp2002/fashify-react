import React from 'react';
import './image-container.css';

const ImageContainer = ({ imageUrl }) => {
  return (
    <div className="image-container rounded m-3">
      {/* Your container content goes here */}
      <img className='rounded' src={imageUrl} alt="ContainerImage" />
    </div>
  );
};

export default ImageContainer;
