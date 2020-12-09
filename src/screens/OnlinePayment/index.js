import React from 'react';
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

const OnlinePayment = () => {
  return (
    <Wrapper>
      <BackButton source={backBtn} />
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
          <AddCardImage source={addCard} />
        </AddCard>
      </WrapperContent>
    </Wrapper>
  );
};

export default OnlinePayment;