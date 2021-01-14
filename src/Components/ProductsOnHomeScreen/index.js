import React, { useEffect, useState } from 'react'
import { View, Image, ScrollView } from 'react-native'
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
  Wrapper,
  FromText
} from './StyledComponent'
import unfilledCart from '../../assets/images/unfilledCart.png'
import filledCart from '../../assets/images/filled.jpg'
import prodInfoIcon from '../../assets/productHome/prodInfo.png'
import loader from '../../assets/productHome/loader.png'
import { useSelector } from 'react-redux'

export default ProductsHome = ({navigation, route, category}) => {

  const {products} = useSelector(state=>state.productReducer)
  console.log("product state from redux store", products)
  
  const [activeCategory, setActiveCategory] = useState(products[category])
  

  useEffect(()=>{
    setActiveCategory(products[category])
    console.log("mark")
  },[category,products])

  return (
    <Wrapper>
        <CategoryWidgetSeparator></CategoryWidgetSeparator>
      <ScrollView >
          <ProductsDisplay>
            <ProductsCategory>
              {category}
            </ProductsCategory>
            <ProductsWrapper>
              {activeCategory.map((data,i)=>(
                <ProductContainer key={i}>
                <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation',{
                  mode:'prodInfo',
                  prodInfo: data
                  })}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <View style={{
                  width:115,
                  height:115,
                  marginLeft:15,
                  marginTop:19,
                  justifyContent:'center',
                  alignItems:'center'
                  }} >
                <ProductImage 
                  source={{uri:`https://snagit-server.herokuapp.com/${data.image}`}} 
                  style={{width:100,height:100}}
                  />
                </View>
                <ProductTitle>{data.name}</ProductTitle>
                <View style={{flexDirection:"row"}}>
                <FromText>From</FromText>
                <ProductPrice>
                  {data.price}
                </ProductPrice>
                <Image source={filledCart} style={{width:30,height:30,marginLeft:30}} />
                </View>

              </ProductContainer>
              ))}

              
            </ProductsWrapper>
          </ProductsDisplay>
          <View style={{width: '100%',alignItems: 'center', marginTop:25, marginBottom:25}}>
          <Image source={loader}  />
          </View>
          <BottomSearch />
      </ScrollView>
    </Wrapper>

  )
}