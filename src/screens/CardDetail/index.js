import React from 'react';
import {
  Wrapper,
  WrapperContent,
  MainHeading,
  CardOptionsImages,
  CardImage,
  SkipButton,
  InputWrapper,
  InputIcon,
  CardNameInput,
  TwoDropdownRow,
  AddCardButton
} from './StyledComponents'
import skip from '../../assets/general/cross.png'
import visa from '../../assets/cardDetail/visa.png'
import americanExp from '../../assets/cardDetail/americanExpress.png'
import master from '../../assets/cardDetail/master.png'
import paypal from '../../assets/cardDetail/paypal.png'
import card from '../../assets/cardDetail/card.png'
import passwordIcon from '../../assets/cardDetail/pass.png'
import dropdown from '../../assets/cardDetail/dropdown.png'
import { Image } from 'react-native';

const CardDetail = (props) => {

  const { navigation } = props
  return (
    
    <Wrapper 
    showsVerticalScrollIndicator={false}
    >
      <SkipButton onPress={()=>navigation.goBack()}>
        <Image source={skip} />
      </SkipButton>

      <WrapperContent  
          behavior="padding" enabled
          keyboardVerticalOffset={500}
      >
        <MainHeading>
          Add card
        </MainHeading>
        
        <CardOptionsImages>
          <CardImage source={visa} />
          <CardImage source={americanExp} />
          <CardImage source={master} />
          <CardImage source={paypal} />
        </CardOptionsImages>

        <InputWrapper>
          <CardNameInput placeholder="Name of card" />
          <InputIcon source={card} />
        </InputWrapper>

        <InputWrapper>
          <CardNameInput placeholder="Card Number" />
          <InputIcon source={card} />
        </InputWrapper>

        <TwoDropdownRow>
          <InputWrapper widthValue='50%'>
            <CardNameInput placeholder="Security code" />
            <InputIcon source={dropdown} />
          </InputWrapper>

          <InputWrapper widthValue='50%'>
            <CardNameInput placeholder="Security code" />
            <InputIcon source={dropdown} />
          </InputWrapper>
        </TwoDropdownRow>

        <InputWrapper>
          <CardNameInput placeholder="Security code" />
          <InputIcon source={passwordIcon} />
        </InputWrapper>

        <AddCardButton>Add Card</AddCardButton>
      </WrapperContent>

    </Wrapper>
    
  );
};

export default CardDetail;