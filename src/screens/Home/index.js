import React, { useEffect, useState } from 'react';
import {Image} from 'react-native'
import { 
  HomeWrapper,
  CategoryWidgetRow,
  CategoryWidgetContainer,
  Badge,
  WidgetTitle
} from './StyledComponent/index';
import ProductHome from '../../Components/ProductsOnHomeScreen'
import topSellerWidget from '../../assets/images/categoryWidget/topsellerOn.png'
import topSellerWidgetOff from '../../assets/images/categoryWidget/topsellerOff.png'
import nicotineWidget from '../../assets/images/categoryWidget/nicotineOn.png'
import nicotineWidgetOff from '../../assets/images/categoryWidget/nicotineOff.png'
import newWidget from '../../assets/images/categoryWidget/newOn.png'
import newWidgetOff from '../../assets/images/categoryWidget/newOff.png'
import drinksWidget from '../../assets/images/categoryWidget/drinkOn.png'
import drinksWidgetOff from '../../assets/images/categoryWidget/drinkOff.png'
import foodWidget from '../../assets/images/categoryWidget/foodOn.png'
import foodWidgetOff from '../../assets/images/categoryWidget/foodOff.png'

export default Home = ({navigation, route}) => {

  const color = {
    selected: "#FCEDEC",
    unSelected: "#D51E16"
  }

  const [category, setCategory] = useState('')

  useEffect(()=>{
    const mode = route.params ? route.params.mode : 'TopSeller'
    setCategory(mode)
  },[route.params])


  return (
    <HomeWrapper>

<CategoryWidgetRow 
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row'
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
            <CategoryWidgetContainer onPress={()=>setCategory('TopSeller')} >
              <Badge bg={category=='TopSeller'?color.selected:color.unSelected} >
                <Image source={category=='TopSeller'?topSellerWidget:topSellerWidgetOff} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Top Sellers</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('New')} >
              <Badge bg={category=='New'?color.selected:color.unSelected} >
              <Image source={category=='New'?newWidget:newWidgetOff} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>New</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Nicotine')} >
              <Badge bg={category=='Nicotine'?color.selected:color.unSelected} >
              <Image source={category=='Nicotine'?nicotineWidget:nicotineWidgetOff} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Nicotines</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Drink')} >
              <Badge bg={category=='Drink'?color.selected:color.unSelected} >
              <Image source={category=='Drink'?drinksWidget:drinksWidgetOff} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Drinks</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Food')} >
              <Badge bg={category=='Food'?color.selected:color.unSelected} >
              <Image source={category=='Food'?foodWidget:foodWidgetOff} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Foods</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Snacks')} >
              <Badge bg={category=='Snacks'?color.selected:color.unSelected} >
              <Image source={category=='Snacks'?foodWidget:foodWidgetOff} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Snacks</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Candy')} >
              <Badge bg={category=='Candy'?color.selected:color.unSelected} >
              <Image source={category=='Candy'?foodWidget:foodWidgetOff} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Candy</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Student Essential')} >
              <Badge bg={category=='Student Essential'?color.selected:color.unSelected} >
              <Image source={category=='Student Essential'?foodWidget:foodWidgetOff} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Student Essentials</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Smokes')} >
              <Badge bg={category=='Smokes'?color.selected:color.unSelected} >
              <Image source={category=='Smokes'?foodWidget:foodWidgetOff} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Smokes</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Vapes')} >
              <Badge bg={category=='Vapes'?color.selected:color.unSelected} >
              <Image source={category=='Vapes'?foodWidget:foodWidgetOff} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Vapes</WidgetTitle>
            </CategoryWidgetContainer>
        </CategoryWidgetRow>

      {!route.params && <ProductHome navigation={navigation} route={route} products='TopSeller' category={category || 'TopSeller'} />}
      {route.params && <ProductHome navigation={navigation} route={route} products={route.params.mode} category={category || route.params.mode} />}
    </HomeWrapper>
  );
};
