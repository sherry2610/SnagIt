import React, { useEffect } from 'react';
import { Image, BackHandler, StatusBar, Text, View } from 'react-native';
import { ProdInfoWrapper, ProductNameSection, ProductName, ProductImageSection, ProductDescriptionSection, DescriptionHeading, DescriptionText, ProductPriceSection, FromText, PriceText } from './StyledComponent/index';
import skip from '../../assets/general/cross.png'
import prod1 from '../../assets/productImages/prod1.png'
import priceTag from '../../assets/productInformation/price.png'
import { AppFooter } from '../../Components/CommonComponets/FooterContent'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default Splash = ({navigation, route}) => {

  console.log("route in prodInfo",route.params)

  const {name,price,description,image} = route.params.prodInfo

  console.log("prodInfo in prodInfo",{name,price,description,image})
  return (
    <>
    <ProdInfoWrapper 
      contentContainerStyle={{
        justifyContent:'center',
        alignItems: 'center'
      }} 
      showsVerticalScrollIndicator={false} >
      <ProductNameSection>
        <ProductName>{name}</ProductName>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Image source={skip} />
        </TouchableOpacity>
      </ProductNameSection>
      
      <ProductImageSection>
        <Image 
          source={{uri:`https://snagit-server.herokuapp.com/${image}`}} 
          style={{width:270,height:270}}
        />
      </ProductImageSection>

      <ProductDescriptionSection>
        <DescriptionHeading>Product Info</DescriptionHeading>
        <DescriptionText>
        {description}
        </DescriptionText>
      </ProductDescriptionSection>

      <ProductPriceSection>
        <FromText>From</FromText>
        <PriceText>${price}</PriceText>
      </ProductPriceSection>
      
    </ProdInfoWrapper>
    </>
  );
};
