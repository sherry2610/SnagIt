import  'react-native-gesture-handler' ;
enableScreens ();

import  React, { useEffect }  from  'react' ;
import  { enableScreens }  from  'react-native-screens' ;
import { Text, StatusBar, View } from 'react-native';
import SplashScreen from './src/screens/Splash'
import ProductInformation from './src/screens/ProductInformation'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import EditProfile from './src/screens/EditProfile'
import ChangePassword from './src/screens/ChangePassword'
import PaymentMethod from './src/screens/PaymentMethod'
import OnlinePayment from './src/screens/OnlinePayment'
import CardDetail from './src/screens/CardDetail'
import CreateAccount from './src/screens/CreateAccount'
import Search from './src/screens/Search'
import Settings from './src/screens/Settings'
import ContactUs from './src/screens/ContactUs'
import TermsOfServices from './src/screens/TermsOfServices'
import AboutUs from './src/screens/AboutUs'
import { AppFooter } from './src/Components/CommonComponets/FooterContent'
import MyCart from './src/Components/MyCart'
import Navigation from './src/Navigations/NavigationContainer'
import {Provider} from 'react-redux';

import {store} from './src/redux/configureStore';

export default App = () => {
  return (
    <Provider store={store}>
    <Navigation  />
    </Provider>
  );
};
