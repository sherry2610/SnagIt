import React from 'react';
import {Image} from 'react-native';
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

const PaymentMethod = ({ navigation }) => {

  return (
    <>
      <PaymentMethodWrapper>
        <HeadingView>
          <BackArrow onPress={()=>navigation.goBack()}>
            <Image source={backArrow} />
          </BackArrow>
          <MainHeading>Payment Method</MainHeading>
        </HeadingView>

        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </Description>

        <PaymentOptions  >
          <RadioButton source={radioBtn} />
          <Option>Online Payment</Option>
          <ForwardIcon  onPress={()=>navigation.navigate('OnlinePayment')}>
            <Image source={miniForward} />
          </ForwardIcon>
        </PaymentOptions>
      </PaymentMethodWrapper>
    </>
  );
};

export default PaymentMethod;
