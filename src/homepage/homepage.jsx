import React from 'react';
import './homepage.css';
import ImageContainer from '../image-container/image-container';
import { Offer1, Offer10, Offer2, Offer3, Offer4, Offer5, Offer6, Offer7, Offer8, Offer9 } from '../assets/index';

const HomePage = () => {
  const imageUrls = [Offer1, Offer2, Offer3, Offer4, Offer5, Offer6, Offer7, Offer8, Offer9, Offer10]

  return (
    <div className="w-100 d-flex homepage mt-3 p-3 flex-wrap">
      {imageUrls.map((imageUrl, index) => {
        return <ImageContainer key={index} imageUrl={imageUrl}></ImageContainer>
      })}
    </div>
  );
};

export default HomePage;