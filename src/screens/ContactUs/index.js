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
  Description,
  Options,
  OptionDetails,
  OptionTag,
  OptionText,
  OptionIcon,
} from './StyledComponents';

const Settings = () => {
  return (
    <>
      <AppHeader />
      <Wrapper>
        <HeadingView>
          <BackArrow source={backArrow} />
          <MainHeading>How Can We Help?</MainHeading>
        </HeadingView>

        <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
        </Description>

        <Options>
          <OptionIcon source={callIcon} />
          <OptionDetails>
          <OptionTag>call us</OptionTag>
          <OptionText>M-F 8am-8pm, Sa-Sun 8am-7pm</OptionText>
          </OptionDetails>
        </Options>

        <Options>
          <OptionIcon source={callIcon} />
          <OptionDetails>
          <OptionTag>email us</OptionTag>
          <OptionText>We’ll get back to your in 1-2 days</OptionText>
          </OptionDetails>
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
