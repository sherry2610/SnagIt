import React from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from './src/screens/Splash'
import ProductInformation from './src/screens/ProductInformation'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import EditProfile from './src/screens/EditProfile'
import { AppFooter } from './src/Components/CommonComponets/FooterContent'

export default App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* <SplashScreen /> */}
      {/* <ProductInformation /> */}
      {/* <Home /> */}
      {/* <Profile /> */}
      <EditProfile />
    <AppFooter />
    </>
  );
};
