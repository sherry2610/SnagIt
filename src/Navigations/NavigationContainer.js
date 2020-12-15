import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RightDrawer from './RightDrawer';
import {AppFooter} from '../Components/CommonComponets/FooterContent'

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="RightDrawer"
          component={RightDrawer}
        />
      </Stack.Navigator>
      <AppFooter />
    </NavigationContainer>
  );
};