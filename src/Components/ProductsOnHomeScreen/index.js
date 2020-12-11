import React from 'react'
import { View, Image, ScrollView, Text } from 'react-native'
import AppHeader from '../AppHeader'
import BottomSearch from '../BottomSearch'
import { 
  CategoryWidget,
  ProductsDisplay,
  CategoryWidgetSeparator,
  ProductsCategory,
  ProductContainer,
  ProductsWrapper,
  ProductInfoIcon,
  ProductImage,
  ProductTitle,
  ProductPrice
} from './StyledComponent'
import bottomTabNavigation from '../../assets/general/dummyBottomNavigation.png'
import categoryWidget from '../../assets/productHome/categoryWidget.png'
import prodInfoIcon from '../../assets/productHome/prodInfo.png'
import priceTag from '../../assets/productHome/priceTag.png'
import loader from '../../assets/productHome/loader.png'
import prodImage1 from '../../assets/productImages/prod1.png'
import prodImage2 from '../../assets/productImages/prod2.png'
import prodImage3 from '../../assets/productImages/prod3.png'
import prodImage4 from '../../assets/productImages/prod4.png'

export default ProductsHome = ({ navDispatch }) => {
  return (
    <>
      <AppHeader navDispatch={navDispatch} />
        <CategoryWidget source={categoryWidget} />
        <CategoryWidgetSeparator></CategoryWidgetSeparator>
      <ScrollView contentContainerStyle={{marginBottom:30}}>
          <ProductsDisplay>
            <ProductsCategory>
              Top Sellers
            </ProductsCategory>
            <ProductsWrapper>
              <ProductContainer>
                <ProductInfoIcon source={prodInfoIcon} />
                <ProductImage source={prodImage1} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
                <ProductInfoIcon source={prodInfoIcon} />
                <ProductImage source={prodImage2} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
                <ProductInfoIcon source={prodInfoIcon} />
                <ProductImage source={prodImage3} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
                <ProductInfoIcon source={prodInfoIcon} />
                <ProductImage source={prodImage4} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
                <ProductInfoIcon source={prodInfoIcon} />
                <ProductImage source={prodImage1} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
                <ProductInfoIcon source={prodInfoIcon} />
                <ProductImage source={prodImage2} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
                <ProductInfoIcon source={prodInfoIcon} />
                <ProductImage source={prodImage3} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
                <ProductInfoIcon source={prodInfoIcon} />
                <ProductImage source={prodImage4} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
                <ProductInfoIcon source={prodInfoIcon} />
                <ProductImage source={prodImage1} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
                <ProductInfoIcon source={prodInfoIcon} />
                <ProductImage source={prodImage2} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
                <ProductInfoIcon source={prodInfoIcon} />
                <ProductImage source={prodImage3} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
                <ProductInfoIcon source={prodInfoIcon} />
                <ProductImage source={prodImage4} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
            </ProductsWrapper>
          </ProductsDisplay>
          <Image source={loader} style={{marginLeft:190,marginTop:30,marginBottom:30}} />
          <BottomSearch />
      </ScrollView>
      <Image source={bottomTabNavigation} style={{width:'100%',marginBottom:50}} />
    </>

  )
}