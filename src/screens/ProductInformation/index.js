import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { ProdInfoWrapper, ProductNameSection, ProductName, ProductImageSection, ProductDescriptionSection, DescriptionHeading, DescriptionText, ProductPriceSection, FromText, PriceText } from './StyledComponent/index';
import skip from '../../assets/general/cross.png'
import prod1 from '../../assets/productImages/prod1.png'
import priceTag from '../../assets/productInformation/price.png'
import { AppFooter } from '../../Components/CommonComponets/FooterContent'

export default Splash = () => {
  return (
    <>
    <ProdInfoWrapper>
      <ProductNameSection>
        <ProductName>Product Name</ProductName>
        <Image source={skip} />
      </ProductNameSection>
      
      <ProductImageSection>
        <Image source={prod1} />
      </ProductImageSection>

      <ProductDescriptionSection>
        <DescriptionHeading>Product Info</DescriptionHeading>
        <DescriptionText>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </DescriptionText>
      </ProductDescriptionSection>

      <ProductPriceSection>
        {/* <FromText>From</FromText>
        <PriceText>$4.59</PriceText> */}
        <Image source={priceTag} />
      </ProductPriceSection>
      
    </ProdInfoWrapper>
    </>
  );
};
