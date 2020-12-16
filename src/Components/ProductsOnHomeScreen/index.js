import React from 'react'
import { View, Image, ScrollView, Dimensions } from 'react-native'
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
  ProductPrice,
  Wrapper
} from './StyledComponent'
import categoryWidget from '../../assets/productHome/categoryWidget.png'
import prodInfoIcon from '../../assets/productHome/prodInfo.png'
import priceTag from '../../assets/productHome/priceTag.png'
import loader from '../../assets/productHome/loader.png'
import prodImage1 from '../../assets/productImages/prod1.png'
import prodImage2 from '../../assets/productImages/prod2.png'
import prodImage3 from '../../assets/productImages/prod3.png'
import prodImage4 from '../../assets/productImages/prod4.png'


const winHeight = Dimensions.get('screen').height


export default ProductsHome = ({navigation}) => {
  return (
    // <View >
    <Wrapper>
        <CategoryWidget source={categoryWidget} />
        <CategoryWidgetSeparator></CategoryWidgetSeparator>
      <ScrollView >
          <ProductsDisplay>
            <ProductsCategory>
              Top Sellers
            </ProductsCategory>
            <ProductsWrapper>
              <ProductContainer>
                <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation')}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <ProductImage source={prodImage1} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
              <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation')}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <ProductImage source={prodImage2} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
              <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation')}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <ProductImage source={prodImage3} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
              <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation')}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <ProductImage source={prodImage4} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
              <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation')}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <ProductImage source={prodImage1} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
              <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation')}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <ProductImage source={prodImage2} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
              <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation')}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <ProductImage source={prodImage3} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
              <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation')}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <ProductImage source={prodImage4} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
              <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation')}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <ProductImage source={prodImage1} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
              <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation')}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <ProductImage source={prodImage2} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
              <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation')}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <ProductImage source={prodImage3} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
              <ProductContainer>
              <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation')}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <ProductImage source={prodImage4} />
                <ProductTitle>Lorem Ispum</ProductTitle>
                <ProductPrice source={priceTag} />
              </ProductContainer>
            </ProductsWrapper>
          </ProductsDisplay>
          <View style={{width: '100%',alignItems: 'center', marginTop:25, marginBottom:25}}>
          <Image source={loader}  />
          </View>
          <BottomSearch />
      </ScrollView>
    {/* </View> */}
    </Wrapper>

  )
}