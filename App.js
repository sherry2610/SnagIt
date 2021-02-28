import  'react-native-gesture-handler' ;
enableScreens ();

import  React, { useEffect }  from  'react' ;
import  { enableScreens }  from  'react-native-screens' ;
import Main from './Main'
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import {store} from './src/redux/store';
// import OrderStatus from './src/screens/OrderStatus'

// const store = ConfigureStore();

export default App = () => {

  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <Provider store={store}>
    <Main  />
    </Provider>
  );
};

