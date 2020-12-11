import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from './src/screens/Splash'
import ProductInformation from './src/screens/ProductInformation'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import EditProfile from './src/screens/EditProfile'
import ChangePassword from './src/screens/ChangePassword'
import PaymentMethod from './src/screens/PaymentMethod'
import OnlinePayment from './src/screens/OnlinePayment'
import CardDetail from './src/screens/CardDetail'
import { AppFooter } from './src/Components/CommonComponets/FooterContent'
import MyCart from './src/Components/MyCart'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* <SplashScreen /> */}
      {/* <ProductInformation /> */}
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <EditProfile /> */}
      {/* <ChangePassword /> */}
      {/* <PaymentMethod /> */}
      {/* <OnlinePayment /> */}
      {/* <CardDetail /> */}

        <Drawer.Navigator
          initialRouteName="Home"
          drawerPosition="right"
          drawerContent={MyCart}
          drawerStyle={{width:'81%'}}
        >
          <Drawer.Screen name="Home" component={Home} />
          {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </Drawer.Navigator>

    <AppFooter />
    </NavigationContainer>
  );
};
