import React from 'react';
import {useDispatch} from 'react-redux';
import {AppConfigActions} from '../../redux/actions';
import { HomeWrapper } from './StyledComponent/index';
import ProductHome from '../../Components/ProductsOnHomeScreen'
import { DrawerActions } from '@react-navigation/native';

export default Home = ({navigation}) => {

  return (
    <HomeWrapper>
      <ProductHome navigation={navigation} />
    </HomeWrapper>
  );
};
