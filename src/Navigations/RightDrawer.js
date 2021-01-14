import React, {useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import LeftDrawer from './LeftDrawer';
import {useDispatch, useSelector} from 'react-redux';
import {DrawerActions} from '@react-navigation/native';
// import {AppConfigActions} from '../redux/actions';
import {drawerActions} from '../redux/actionCreators';
import {View} from 'react-native';
import MyCart from '../Components/MyCart'

const Drawer = createDrawerNavigator();

export default ({navigation}) => {
  const state = useSelector((state) => state.drawerReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.rightDrawerState === 'toggle') {
      navigation.dispatch(DrawerActions.openDrawer());
      dispatch(drawerActions.resetRightDrawer());
    }
  }, [state.rightDrawerState === 'toggle']);
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={(props) => <MyCart {...props} />}>
      <Drawer.Screen name="LeftDrawer" component={LeftDrawer} />
    </Drawer.Navigator>
  );
};
