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
          <MainHeading>About</MainHeading>
        </HeadingView>

        <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Description>

        <Options>
          <OptionIcon source={callIcon} />
          <OptionDetails>
          <OptionTag>Search</OptionTag>
          <OptionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</OptionText>
          </OptionDetails>
        </Options>

        <Options>
          <OptionIcon source={callIcon} />
          <OptionDetails>
          <OptionTag>Search</OptionTag>
          <OptionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</OptionText>
          </OptionDetails>
        </Options>

        <Options>
          <OptionIcon source={callIcon} />
          <OptionDetails>
          <OptionTag>Search</OptionTag>
          <OptionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</OptionText>
          </OptionDetails>
        </Options>
        
        <Options>
          <OptionIcon source={callIcon} />
          <OptionDetails>
          <OptionTag>Search</OptionTag>
          <OptionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</OptionText>
          </OptionDetails>
        </Options>

        <Options lastOption={true}>
          <OptionIcon source={callIcon} />
          <OptionDetails>
          <OptionTag>Search</OptionTag>
          <OptionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</OptionText>
          </OptionDetails>
        </Options>
      </Wrapper>
      <Image
        source={bottomTabNavigation}
        style={{width: '100%', position: 'absolute', bottom: 46, zIndex: 10}}
      />
    </>
  );
};

export default Settings;
