import React from 'react';
import {Image} from 'react-native';
import AppHeader from '../../Components/AppHeader';
import bottomTabNavigation from '../../assets/general/dummyBottomNavigation.png';
import backArrow from '../../assets/paymentMethod/backArrow.png';
import radioBtn from '../../assets/paymentMethod/radioBtn.png';
import miniForward from '../../assets/paymentMethod/miniForward.png';
import {
  PaymentMethodWrapper,
  HeadingView,
  MainHeading,
  BackArrow,
  Description,
  PaymentOptions,
  RadioButton,
  Option,
  ForwardIcon,
} from './StyledComponents';

const PaymentMethod = () => {
  return (
    <>
      <AppHeader />
      <PaymentMethodWrapper>
        <HeadingView>
          <BackArrow source={backArrow} />
          <MainHeading>Payment Method</MainHeading>
        </HeadingView>

        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </Description>

        <PaymentOptions>
          <RadioButton source={radioBtn} />
          <Option>Online Payment</Option>
          <ForwardIcon source={miniForward} />
        </PaymentOptions>
      </PaymentMethodWrapper>
      <Image
        source={bottomTabNavigation}
        style={{width: '100%', position: 'absolute', bottom: 49}}
      />
    </>
  );
};

export default PaymentMethod;
