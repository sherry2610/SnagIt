import React from 'react';
import { StatusBar } from 'react-native';
import {
  SplashWrapper,
  ImgBg,
  MainLogo,
  SplashFooter,
  FooterContent,
} from './StyledComponent/index';

export default Splash = () => {
  return (
    <SplashWrapper>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ImgBg source={require('../../assets/general/bg-circles.png')}>
        <MainLogo source={require('../../assets/general/mainLogo.png')} />
      </ImgBg>
      <SplashFooter>
        <FooterContent></FooterContent>
      </SplashFooter>
    </SplashWrapper>
  );
};
