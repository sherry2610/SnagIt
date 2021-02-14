import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native'
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
import cardIcon from '../../assets/onlinePayment/visa.png'
import backBtn from '../../assets/onlinePayment/backButton.png'
import tick from '../../assets/onlinePayment/tick.png'
import addCard from '../../assets/onlinePayment/addCard.png'
import {useDispatch, useSelector} from 'react-redux'
import _ from 'underscore'
import { setCardName } from '../../redux/actionCreators';

const OnlinePayment = (props) => {

  const dispatch = useDispatch()

  const { authedUser } = useSelector(state=> state.authedUser)

  const [userCards, setUserCards] = useState(authedUser.user.cards)
  const [selectedCard, setSelectedCard] = useState('')

  useEffect(()=>{
    setUserCards(authedUser.user.cards)
  },[authedUser.user.cards.length])

  console.log("userCards",userCards)
  console.log("selected",selectedCard)
  console.log("authedUser",authedUser)
  




  const { navigation } = props

  let allIds = _.pluck(userCards,'_id')
  console.log("allIds",allIds)
  return (
    <View style={{flex:1}}>
    <Wrapper 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <BackButton onPress={()=>navigation.goBack()} >
      <Image source={backBtn} />
      </BackButton>
      <WrapperContent>
        <MainHeading>
          Online Payment
        </MainHeading>

        {
        
        userCards.map(card=>{
          let isSel = _.where(userCards,{_id: selectedCard})
          console.log("isSel",isSel)
          return <TouchableOpacity onPress={()=>{
            setSelectedCard(card._id)
            dispatch(setCardName(card.card_name))
            }} >
          <CardContent>
            <CardImage source={cardIcon} />
            <CardNumber>
            {`************${card.card_name}`}
            </CardNumber>
            {isSel.length?isSel[0]._id==card._id && <TickIcon source={tick} /> : <></>}
          </CardContent>
          </TouchableOpacity>
        })}

        
{/* 
        <CardContent>
          <CardImage source={card} />
          <CardNumber>
          123-321-12345678
          </CardNumber>
        </CardContent> */}

        <AddCard>
          <AddCardText>Add card</AddCardText>
          <AddCardImage onPress={()=>navigation.navigate('CardDetail')} >
            <Image source={addCard} />
          </AddCardImage>
        </AddCard>
      </WrapperContent>
    </Wrapper>
    </View>
  );
};

export default OnlinePayment;