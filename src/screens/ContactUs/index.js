import React from 'react';
import {Image} from 'react-native';
import backArrow from '../../assets/paymentMethod/backArrow.png';
import callIcon from '../../assets/aboutus/search_about.png'
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
  OptionImage
} from './StyledComponents';

const Settings = ({ navigation }) => {
  
  return (
    <>
      <Wrapper>
        <HeadingView>
          <BackArrow onPress={()=>navigation.goBack()}>
            <Image source={backArrow} />
          </BackArrow>
          <MainHeading>How Can We Help?</MainHeading>
        </HeadingView>

        <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
        </Description>

        <Options>
          <OptionImage>
          <OptionIcon source={callIcon} />
          </OptionImage>
          <OptionDetails>
          <OptionTag>call us</OptionTag>
          <OptionText>M-F 8am-8pm, Sa-Sun 8am-7pm</OptionText>
          </OptionDetails>
        </Options>

        <Options>
        <OptionImage>
          <OptionIcon source={callIcon} />
          </OptionImage>
          <OptionDetails>
          <OptionTag>email us</OptionTag>
          <OptionText>We’ll get back to your in 1-2 days</OptionText>
          </OptionDetails>
        </Options>

      </Wrapper>
    </>
  );
};

export default Settings;
