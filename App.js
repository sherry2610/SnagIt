import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from './src/screens/Splash'
import ProductInformation from './src/screens/ProductInformation'
import Home from './src/screens/Home'
import { AppFooter } from './src/Components/CommonComponets/FooterContent'

export default App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* <SplashScreen /> */}
      {/* <ProductInformation /> */}
      <Home />
    <AppFooter />
    </>
  );
};
