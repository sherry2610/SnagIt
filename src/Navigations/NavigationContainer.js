import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RightDrawer from './RightDrawer';
import { StatusBar } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchProductsByCategory } from '../redux/actionCreators'

const Stack = createStackNavigator();

export default () => {
  // const dispatch = useDispatch()

  // const prodFetch = (cat) => {
  //   dispatch(fetchProductsByCategory(cat))
  //   .then(res=>console.log("res of productfetching function from reducer ",cat,res))
  //   .catch(err=>console.log("err of productfetching function from reducer ",err))
  // }

  // useEffect(()=>{
  //   prodFetch("TopSeller")
  //   prodFetch("New")
  //   prodFetch("Nicotine")
  //   prodFetch("Drink")
  //   prodFetch("Food")
  //   prodFetch("Snacks")
  //   prodFetch("Candy")
  // },[])
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="RightDrawer"
          component={RightDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};