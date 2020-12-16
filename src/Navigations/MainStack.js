import React from 'react';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, TouchableOpacity, View} from 'react-native';
import {AppConfigActions} from '../redux/actions';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import TermsOfServices from '../screens/TermsOfServices';
import PastOrders from '../screens/PastOrders';
import AboutUs from '../screens/AboutUs';
import ContactUs from '../screens/ContactUs';
import appLogo from '../assets/general/mainLogo.png'
import cartIcon from '../assets/appHeader/cartWithTwoItems.png'
import hamburger from '../assets/appHeader/hamburger.png'
import searchIcon from '../assets/appHeader/search.png'
import ProductInformation from '../screens/ProductInformation';
import ChangePassword from '../screens/ChangePassword';
import EditProfile from '../screens/EditProfile';
import PaymentMethod from '../screens/PaymentMethod';
import OnlinePayment from '../screens/OnlinePayment';
import CardDetail from '../screens/CardDetail';
// import homeTabIcon from '../assets/general/homeTab.png'
// import profileTabIcon from '../assets/general/profileTab.png'
// import historyTabIcon from '../assets/general/historyTab.png'
import { AppFooter } from '../Components/CommonComponets/FooterContent';
import CreateAccount from '../screens/CreateAccount';

const Stack = createStackNavigator();

export default ({navigation}) => {

  const dispatch = useDispatch();

  const options = {
    headerLeft: () => (
      <TouchableOpacity onPress={navigation.openDrawer} style={{marginLeft: 10}}>
        <Image source={hamburger} />
      </TouchableOpacity>
    ),

    headerTitle: props => {
      return (
        <View style={{alignSelf: 'center', flex: 1}}>
          <Image
            resizeMode="cover"
            style={{
            width: 131,
            height: 56,
            resizeMode:'contain',
            }}
            source={appLogo}
          />
          </View>
      )
    } ,
    headerStyle: {
      backgroundColor: '#D51E16',
      height: 78,
    },


    headerRight: () => (
      <View style={{flexDirection: 'row', marginRight:8}} >
      <TouchableOpacity
        style={{marginTop:15}}
        onPress={() => alert("Search!")}>
        <Image source={searchIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginLeft:15}}
        onPress={() => dispatch(AppConfigActions.toggleRightDrawer())}>
        <Image source={cartIcon} />
      </TouchableOpacity>
      </View>
    ),
  };

  
  


  return (
    <>
      <Stack.Navigator initialRouteName="Profile" >
      <Stack.Screen options={options} name="Home" component={Home} />
      <Stack.Screen options={{...options,headerShown:false}} name="ProductInformation" component={ProductInformation} />
      <Stack.Screen options={options} name="Settings" component={Settings} />
      <Stack.Screen options={options} name="AboutUs" component={AboutUs} />
      <Stack.Screen options={options} name="ContactUs" component={ContactUs} />
      <Stack.Screen options={options} name="TermsOfServices" component={TermsOfServices} />
      <Stack.Screen options={options} name="PastOrders" component={PastOrders} />
      <Stack.Screen options={options} name="Profile" component={Profile} />
      <Stack.Screen options={{...options,headerShown:false}} name="EditProfile" component={EditProfile} />
      <Stack.Screen options={{...options,headerShown:false}} name="ChangePassword" component={ChangePassword} />
      <Stack.Screen options={options} name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen options={{...options,headerShown:false}} name="OnlinePayment" component={OnlinePayment} />
      <Stack.Screen options={{...options,headerShown:false}} name="CardDetail" component={CardDetail} />
      <Stack.Screen options={{...options,headerShown:false}} name="CreateAccount" component={CreateAccount} />
      </Stack.Navigator>
      <AppFooter />
      </>
  );
};

