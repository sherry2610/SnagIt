import React from 'react';
import {Image} from 'react-native';
import AppHeader from '../../Components/AppHeader';
import bottomTabNavigation from '../../assets/general/dummyBottomNavigation.png';
import backArrow from '../../assets/paymentMethod/backArrow.png';
import callIcon from '../../assets/contact/callIcon.jpeg'
import {
  Wrapper,
  HeadingView,
  MainHeading,
  BackArrow,
  DescriptionHeading,
  Description,
} from './StyledComponents';

const Settings = () => {
  return (
    <>
      <AppHeader />
      <Wrapper>
        <HeadingView>
          <BackArrow source={backArrow} />
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
      <Image
        source={bottomTabNavigation}
        style={{width: '100%', position: 'absolute', bottom: 49}}
      />
    </>
  );
};

export default Settings;
