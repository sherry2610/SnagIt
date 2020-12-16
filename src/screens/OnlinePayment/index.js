import React from 'react';
import { Image } from 'react-native'
import {
  Wrapper,
  BackButton,
  WrapperContent,
  MainHeading,
  CardContent,
  CardImage,
  CardNumber,
  TickIcon,
  AddCard,
  AddCardText,
  AddCardImage
} from './StyledComponents'
import card from '../../assets/onlinePayment/visa.png'
import backBtn from '../../assets/onlinePayment/backButton.png'
import tick from '../../assets/onlinePayment/tick.png'
import addCard from '../../assets/onlinePayment/addCard.png'

const OnlinePayment = (props) => {

  const { navigation } = props
  return (
    <Wrapper>
      <BackButton onPress={()=>navigation.goBack()} >
      <Image source={backBtn} />
      </BackButton>
      <WrapperContent>
        <MainHeading>
          Online Payment
        </MainHeading>

        <CardContent>
          <CardImage source={card} />
          <CardNumber>
          123-321-12345678
          </CardNumber>
          <TickIcon source={tick} />
        </CardContent>

        <CardContent>
          <CardImage source={card} />
          <CardNumber>
          123-321-12345678
          </CardNumber>
        </CardContent>

        <AddCard>
          <AddCardText>Add card</AddCardText>
          <AddCardImage onPress={()=>navigation.navigate('CardDetails')} >
            <Image source={addCard} />
          </AddCardImage>
        </AddCard>
      </WrapperContent>
    </Wrapper>
  );
};

export default OnlinePayment;