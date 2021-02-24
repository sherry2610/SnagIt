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
import topSellerWidget from '../../assets/images/categoryWidget/topseller.png'
import nicotineWidget from '../../assets/images/categoryWidget/nicotine.png'
import newWidget from '../../assets/images/categoryWidget/new.png'
import drinksWidget from '../../assets/images/categoryWidget/drink.png'
import foodWidget from '../../assets/images/categoryWidget/food.png'

export default Home = ({navigation, route}) => {

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
              <Badge bg='#FCEDEC' >
                <Image source={topSellerWidget} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Top Sellers</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('New')} >
              <Badge bg='#D51E16' >
              <Image source={newWidget} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>New</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Nicotine')} >
              <Badge bg='#D51E16' >
              <Image source={nicotineWidget} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Nicotines</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Drink')} >
              <Badge bg='#D51E16' >
              <Image source={drinksWidget} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Drinks</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Food')} >
              <Badge bg='#D51E16' >
              <Image source={foodWidget} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Foods</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Snacks')} >
              <Badge bg='#D51E16' >
              <Image source={foodWidget} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Snacks</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Candy')} >
              <Badge bg='#D51E16' >
              <Image source={foodWidget} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Candy</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Student Essential')} >
              <Badge bg='#D51E16' >
              <Image source={foodWidget} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Student Essentials</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Smokes')} >
              <Badge bg='#D51E16' >
              <Image source={foodWidget} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Smokes</WidgetTitle>
            </CategoryWidgetContainer>

            <CategoryWidgetContainer onPress={()=>setCategory('Vapes')} >
              <Badge bg='#D51E16' >
              <Image source={foodWidget} style={{width:40,height:40}} />
              </Badge>
              <WidgetTitle>Vapes</WidgetTitle>
            </CategoryWidgetContainer>
        </CategoryWidgetRow>

      {!route.params && <ProductHome navigation={navigation} route={route} products='TopSeller' category={category || 'TopSeller'} />}
      {route.params && <ProductHome navigation={navigation} route={route} products={route.params.mode} category={category || route.params.mode} />}
    </HomeWrapper>
  );
};
