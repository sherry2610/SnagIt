import React from 'react';
import {Image} from 'react-native';
import backArrow from '../../assets/paymentMethod/backArrow.png';
import {
  Wrapper,
  HeadingView,
  MainHeading,
  BackArrow,
  DescriptionHeading,
  Description,
} from './StyledComponents';

const TermsOfServices = ({ navigation }) => {

  return (
    <>
      <Wrapper contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}} >
        <HeadingView>
          <BackArrow onPress={()=>navigation.goBack()}>
            <Image source={backArrow} />
          </BackArrow>
          <MainHeading>Terms Of Services</MainHeading>
        </HeadingView>

        <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not Ipsum.
        </Description>
        <DescriptionHeading>Lorem Ipsum is simply dummy text</DescriptionHeading>
        <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not Ipsum.
        </Description>

      </Wrapper>
    </>
  );
};

export default TermsOfServices;
