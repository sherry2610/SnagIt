import React from 'react';
import { HomeWrapper } from './StyledComponent/index';
import ProductHome from '../../Components/ProductsOnHomeScreen'

export default Home = ({navigation}) => {
  return (
    <HomeWrapper>
      <ProductHome navDispatch={navigation.dispatch} />
    </HomeWrapper>
  );
};
