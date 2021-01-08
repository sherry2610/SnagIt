import React, { useEffect, useState } from 'react'
import { View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
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
} from './StyledComponent'
import categoryWidget from '../../assets/productHome/categoryWidget.png'
import prodInfoIcon from '../../assets/productHome/prodInfo.png'
import loader from '../../assets/productHome/loader.png'
import prodImage1 from '../../assets/images/prod1.png'
import prodImage2 from '../../assets/images/prod2.png'
import prodImage3 from '../../assets/images/prod3.png'
import prodImage4 from '../../assets/images/prod4.png'
import prodImage5 from '../../assets/images/prod5.png'
import prodImage6 from '../../assets/images/prod6.png'
import prodImage7 from '../../assets/images/prod7.png'
import prodImage8 from '../../assets/images/prod8.png'
import prodImage9 from '../../assets/images/prod9.png'
import prodImage10 from '../../assets/images/prod10.png'
import priceTag from '../../assets/productHome/priceTag.png'



const prods = {
  topSellers : [
    {
      title: 'Lorem Ipsum',
      image: prodImage2,
      price: priceTag
    },
    {
      title: 'Lorem Ipsum',
      image: prodImage3,
      price: priceTag
    },
    {
      title: 'Lorem Ipsum',
      image: prodImage4,
      price: priceTag
    },
    {
      title: 'Lorem Ipsum',
      image: prodImage3,
      price: priceTag
    },
    {
      title: 'Lorem Ipsum',
      image: prodImage2,
      price: priceTag
    },
    {
      title: 'Lorem Ipsum',
      image: prodImage3,
      price: priceTag
    }
  ],
  New : [
    {
      title: 'Lorem Ipsum',
      image: prodImage5,
      price: priceTag
    },
    {
      title: 'Lorem Ipsum',
      image: prodImage6,
      price: priceTag
    },
    {
      title: 'Lorem Ipsum',
      image: prodImage1,
      price: priceTag
    }
  ],
  Drinks: [
    {
      title: 'Lorem Ipsum',
      image: prodImage8,
      price: priceTag
    },
    {
      title: 'Lorem Ipsum',
      image: prodImage9,
      price: priceTag
    },
  ],
  Food: [
    {
      title: 'Lorem Ipsum',
      image: prodImage10,
      price: priceTag
    },
    {
      title: 'Lorem Ipsum',
      image: prodImage4,
      price: priceTag
    },
  ],
  Food: [
    {
      title: 'Lorem Ipsum',
      image: prodImage4,
      price: priceTag
    },
    {
      title: 'Lorem Ipsum',
      image: prodImage10,
      price: priceTag
    },
  ],
  Snacks: [
    {
      title: 'Lorem Ipsum',
      image: prodImage10,
      price: priceTag
    },
    {
      title: 'Lorem Ipsum',
      image: prodImage9,
      price: priceTag
    },
  ],
  Candy: [
    {
      title: 'Lorem Ipsum',
      image: prodImage1,
      price: priceTag
    },
  ],
}



const winHeight = Dimensions.get('screen').height




export default ProductsHome = ({navigation, route, products, category}) => {
  const [activeCategory, setActiveCategory] = useState(category==="Nicotine"?prods["New"]:prods[category])


  useEffect(()=>{
    setActiveCategory(category==="Nicotine"?prods["New"]:prods[category])
  },[category])

  // console.log("route",route)

  // console.log("navigation",navigation)

  // useEffect(()=>{
  // if(route.params){
  //   const { mode } = route.params
  //   const categoryToShow =  mode == 'New' ? New : topSellers
  //   setActiveCategory(categoryToShow)
  // }else{
  //   setActiveCategory(topSellers)
  // }
  // },[])

console.log("activeCategory",activeCategory)
console.log("category",category)

  return (
    // <View >
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
                <ProductInfoIcon onPress={()=>navigation.navigate('ProductInformation',{mode:'prodInfo'})}>
                  <Image source={prodInfoIcon} />
                </ProductInfoIcon>
                <View style={{
                  width:115,
                  height:115,
                  marginLeft:15,
                  marginTop:19,
                  // borderWidth:1,
                  // borderColor:'#000',
                  justifyContent:'center',
                  alignItems:'center'
                  }} >
                <ProductImage source={data.image} />
                </View>
                <ProductTitle>{data.title}</ProductTitle>
                <ProductPrice source={data.price} />
              </ProductContainer>
              ))}

              
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