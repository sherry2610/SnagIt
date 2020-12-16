import React from 'react';
import {Image} from 'react-native';
import backArrow from '../../assets/paymentMethod/backArrow.png';
import searchImg from '../../assets/aboutus/search_about.png'
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

const About = ({ navigation }) => {

  return (
    <>
      <Wrapper showsVerticalScrollIndicator={false} >
        <HeadingView>
          <BackArrow onPress={()=>navigation.goBack()} >
          <Image source={backArrow} />
          </BackArrow>
          <MainHeading>About</MainHeading>
        </HeadingView>

        <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Description>

        <Options>
        <OptionImage>
          <OptionIcon source={searchImg} />
          </OptionImage>

          <OptionDetails>
          <OptionTag>Search</OptionTag>
          <OptionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</OptionText>
          </OptionDetails>
        </Options>

        <Options>
          <OptionImage>
          <OptionIcon source={searchImg} />
          </OptionImage>
          
          <OptionDetails>
          <OptionTag>Search</OptionTag>
          <OptionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</OptionText>
          </OptionDetails>
        </Options>

        <Options>
        <OptionImage>
          <OptionIcon source={searchImg} />
          </OptionImage>

          <OptionDetails>
          <OptionTag>Search</OptionTag>
          <OptionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</OptionText>
          </OptionDetails>
        </Options>
        
        <Options>
        <OptionImage>
          <OptionIcon source={searchImg} />
          </OptionImage>

          <OptionDetails>
          <OptionTag>Search</OptionTag>
          <OptionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</OptionText>
          </OptionDetails>
        </Options>

        <Options lastOption={true}>
        <OptionImage>
          <OptionIcon source={searchImg} />
          </OptionImage>

          <OptionDetails>
          <OptionTag>Search</OptionTag>
          <OptionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</OptionText>
          </OptionDetails>
        </Options>
      </Wrapper>
    </>
  );
};

export default About;
