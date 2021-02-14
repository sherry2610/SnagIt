import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RightDrawer from './RightDrawer';
import { StatusBar } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchProductsByCategory } from '../redux/actionCreators'

const Stack = createStackNavigator();

export default () => {

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