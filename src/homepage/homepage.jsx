import React from 'react';
import './homepage.scss';
import ImageContainer from '../image-container/image-container';
import { Offer1, Offer10, Offer2, Offer3, Offer4, Offer5, Offer6, Offer7, Offer8, Offer9 } from '../assets/index';
import ImageNameEnum from '../enums/image-name.enum';


const HomePage = () => {
  const images = [
    {imageUrl: Offer1, imageCategory: ImageNameEnum.DISCOUNTTHIRTY},
    {imageUrl: Offer2, imageCategory: ImageNameEnum.DISCOUNTTHIRTY},
    {imageUrl: Offer3, imageCategory: ImageNameEnum.DISCOUNTTHIRTY},
    {imageUrl: Offer4, imageCategory: ImageNameEnum.DISCOUNTTHIRTY},
    {imageUrl: Offer5, imageCategory: ImageNameEnum.DISCOUNTFIFTY},
    {imageUrl: Offer6, imageCategory: ImageNameEnum.DISCOUNTFIFTY},
    {imageUrl: Offer7, imageCategory: ImageNameEnum.DISCOUNTFIFTY},
    {imageUrl: Offer8, imageCategory: ImageNameEnum.DISCOUNTFIFTY},
    {imageUrl: Offer9, imageCategory: ImageNameEnum.BRAND},
    {imageUrl: Offer10, imageCategory: ImageNameEnum.BRAND},
  ]

  return (
    <div className="w-100 d-flex homepage mt-3 p-3 flex-wrap">
      {images.map((image, index) => {
        return <ImageContainer key={index} image={image}></ImageContainer>
      })}
    </div>
  );
};

export default HomePage;