import React from 'react';
import {Image} from 'react-native';
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
import { DrawerActions } from '@react-navigation/native';
import { AppConfigActions } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Settings = ({ navigation }) => {


  return (
    <>
      <Wrapper>
        <HeadingView>
          <BackArrow onPress={()=>navigation.goBack()}>
            <Image source={backArrow} />
          </BackArrow>
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
    </>
  );
};

export default Settings;
