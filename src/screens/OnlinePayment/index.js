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
import { setCardName, setCartToInitialState, setOrderInPlace, setTimeStampAtWhichOrderPlaced } from '../../redux/actionCreators';
import api from '../../utils/apiUtils/api';

const OnlinePayment = (props) => {

  const dispatch = useDispatch()

  const { authedUser, comingForCheckout ,cardsOnSignup } = useSelector(state=> state.authedUser)
  const { payloadForOrder } = useSelector(state=> state.orderStatusReducer)

  const [userCards, setUserCards] = useState(authedUser.user ? authedUser.user.cards : [])
  const [selectedCard, setSelectedCard] = useState('')

  useEffect(()=>{
    setUserCards(authedUser.user ? authedUser.user.cards:[])
  },[authedUser.user && authedUser.user.cards.length])

  console.log("in Onlinepayment",{userCards,selectedCard,authedUser})
  
const handleCheckout = async (cardId, cardName) => {
  
  setSelectedCard(cardId)
  dispatch(setCardName(cardName))

  const {amount, card_name, deliveryAddress, tip, promoCode} = payloadForOrder

  console.log("payload",{amount, card_name:selectedCard, deliveryAddress, tip, promoCode})

  


  

  // let readyToProceed = confirm(`Are you sure you want to proceed to execute payment with ${selectedCard}`)

  // if(readyToProceed){
    // alert("goOn!")
  // }else{
    // alert("Stop!")
  // }

  console.log('+++++++++++++++proceed to checkout')
        await api.placeOrder({amount, card_name:cardName, deliveryAddress, tip, promoCode},authedUser.token)
        .then(async (res)=>{
          console.log("resp after order placed",res)
          if(res.success){
            console.log("CHECKER1")
            // alert("Checkout successfull!")
            await dispatch(setCartToInitialState())
            console.log("CHECKER2")
            await dispatch(setCardName(""))
            console.log("CHECKE3")
            dispatch(setTimeStampAtWhichOrderPlaced(Date.now()))
            dispatch(setOrderInPlace(true))
            navigation.navigate("OrderStatus")
          }else{
            alert("something went wrong in checkout!")
          }
        })
        .catch(error=>console.log("error after order placed",error))
}



  const { navigation } = props

  let allIds = _.pluck(userCards,'_id')
  console.log("allIds",allIds)
  if(!comingForCheckout){
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
  
          {/* {
          
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
          })} */}

            {/* <TouchableOpacity onPress={()=>{
              setSelectedCard(card._id)
              dispatch(setCardName(card.card_name))
              }} > */}
              {
                cardsOnSignup.length == 1 &&
              <CardContent>
                <CardImage source={cardIcon} />
                <CardNumber>
                {`************${cardsOnSignup[0].card_name}`}
                </CardNumber>
                {/* {isSel.length?isSel[0]._id==card._id && <TickIcon source={tick} /> : <></>} */}
              </CardContent>
              }
              
            {/* </TouchableOpacity> */}
  
          
  {/* 
          <CardContent>
            <CardImage source={card} />
            <CardNumber>
            123-321-12345678
            </CardNumber>
          </CardContent> */}
  
          <AddCard>
            <AddCardText>Add card</AddCardText>
            <AddCardImage onPress={()=>{
              if(cardsOnSignup.length == 1){
                alert("You can only add one card on signup")
                return
              }else{
              navigation.navigate('CardDetail')
            }
              }} >
              <Image source={addCard} />
            </AddCardImage>
          </AddCard>
        </WrapperContent>
      </Wrapper>
      </View>
    );
  }
  else{
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
          return <TouchableOpacity onPress={()=>{handleCheckout(card._id,card.card_name)}} >
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
}
};

export default OnlinePayment;