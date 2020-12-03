import React from 'react';
import { StatusBar } from 'react-native';
import {
  SplashWrapper,
  ImgBg,
  MainLogo,
} from './StyledComponent/index';


export default Splash = () => {
  return (
    <SplashWrapper>
      <ImgBg source={require('../../assets/general/bg-circles.png')}>
        <MainLogo source={require('../../assets/general/mainLogo.png')} />
      </ImgBg>
      {/* <AppFooter /> */}
    </SplashWrapper>
  );
};
