import  React ,  { useEffect }  from  'react' ;
import  { createDrawerNavigator }  from  '@react-navigation/drawer';
import  { DrawerActions }  from  '@react-navigation/native';
import MyCart from '../Components/MyCart'
import  { useDispatch ,  useSelector }  from  'react-redux' ;
import { AppConfigActions } from '../redux/actions'

import  LeftDrawer  from  './LeftDrawer' ;

const  Drawer  =  createDrawerNavigator ( ) ;

export  default  ( { navigation } )  =>  {

  const  { rightDrawerState }  =  useSelector(state=>  state.appConfig) ;
  const  dispatch  =  useDispatch() ;

  useEffect (()  =>  {
    if  ( rightDrawerState === 'toggle' )  {
      navigation.dispatch(DrawerActions.openDrawer());
      dispatch(AppConfigActions.resetRightDrawer());
    }
  } ,[rightDrawerState === 'toggle']);

  return  (
    <Drawer.Navigator
    // initialRouteName="Home"
    drawerPosition="right"
    drawerContent={MyCart}
    drawerStyle={{width:'81%'}}
  >
      <Drawer.Screen  name="LeftDrawer"  component={ LeftDrawer } />
    </Drawer.Navigator>
  ) ;
};