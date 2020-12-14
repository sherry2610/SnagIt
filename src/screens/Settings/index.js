import React from 'react';
import {Image} from 'react-native';
import AppHeader from '../../Components/AppHeader';
import bottomTabNavigation from '../../assets/general/dummyBottomNavigation.png';
import backArrow from '../../assets/paymentMethod/backArrow.png';
import onOff from '../../assets/general/onOff.png'
import {
  Wrapper,
  HeadingView,
  MainHeading,
  BackArrow,
  Description,
  Options,
  Option,
  OnOffButton,
} from './StyledComponents';

const Settings = () => {
  return (
    <>
      <AppHeader />
      <Wrapper>
        <HeadingView>
          <BackArrow source={backArrow} />
          <MainHeading>Settings</MainHeading>
        </HeadingView>

        <Description>
        When there is an update to your order
        </Description>

        <Options>
          <Option>Send a push notification</Option>
          <OnOffButton source={onOff} />
        </Options>

      </Wrapper>
      <Image
        source={bottomTabNavigation}
        style={{width: '100%', position: 'absolute', bottom: 49}}
      />
    </>
  );
};

export default Settings;
