import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {drawerActions} from '../redux/actionCreators';
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
import homeTabIcon from '../assets/general/homeTab.png'
import profileTabIcon from '../assets/general/profileTab.png'
import historyTabIcon from '../assets/general/historyTab.png'
import { AppFooter } from '../Components/CommonComponets/FooterContent';
import CreateAccount from '../screens/CreateAccount';
import SignIn from '../screens/SignIn';
import Search from '../screens/Search';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const {authedUser} = useSelector(state => state.authedUser)
  return (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = homeTabIcon
        } else if (route.name === 'Profile') {
          iconName = profileTabIcon
        } else if (route.name === 'PastOrders') {
          iconName = historyTabIcon
        }

        return <Image source={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      inactiveBackgroundColor: '#D51E16',
      activeBackgroundColor: '#D51E16',
      paddingTop: 40,
      showLabel: false,
      tabStyle:{borderRightColor:'white', borderRightWidth:1,},
      style:{
        height:62,
        position: 'relative',
        bottom: 50
      }
    }}

  >
    
    <Tab.Screen name="Profile" component={Profile} screenProps={{ loggedIn: authedUser.token?true:false }} />
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="PastOrders" component={PastOrders} />
  </Tab.Navigator>
  )
}

export default ({navigation}) => {

  const dispatch = useDispatch();
  const {authedUser} = useSelector((state) => state.authedUser)
  
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)


  useEffect(()=>{
    function sessionCheck(){
      if(authedUser.token){
        setIsUserSignedIn(true)
      }else{
        setIsUserSignedIn(false)
      }

    }
    sessionCheck()
  },[authedUser.token])

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
        onPress={() => navigation.navigate('Search')}>
        <Image source={searchIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginLeft:15}}
        onPress={() => dispatch(drawerActions.toggleRightDrawer())}>
        <Image source={cartIcon} />
      </TouchableOpacity>
      </View>
    ),
  };

  return (
    <>
      <Stack.Navigator >
      <Stack.Screen options={options} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen options={{...options,headerShown:false}} name="ProductInformation" component={ProductInformation} />
      <Stack.Screen options={options} name="Settings" component={Settings} />
      <Stack.Screen options={options} name="AboutUs" component={AboutUs} />
      <Stack.Screen options={options} name="ContactUs" component={ContactUs} />
      <Stack.Screen options={options} name="TermsOfServices" component={TermsOfServices} />
      <Stack.Screen options={{...options,headerShown:false}} name="EditProfile" component={EditProfile} />
      <Stack.Screen options={{...options,headerShown:false}} name="ChangePassword" component={ChangePassword} />
      <Stack.Screen options={options} name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen options={{...options,headerShown:false}} name="OnlinePayment" component={OnlinePayment} />
      <Stack.Screen options={{...options,headerShown:false}} name="CardDetail" component={CardDetail} />
      <Stack.Screen options={{...options,headerShown:false}} name="Search" component={Search} />
      <Stack.Screen options={{...options,headerShown:false}} name="SignIn" component={SignIn} />
      <Stack.Screen options={{...options,headerShown:false}} name="CreateAccount" component={CreateAccount} />
      </Stack.Navigator>
      <AppFooter />
      </>
  );
};

