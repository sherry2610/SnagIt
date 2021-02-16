import React, { useState } from 'react';
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
import { Image, TouchableOpacity } from 'react-native';
import api from '../../utils/apiUtils/api'
import { useDispatch, useSelector } from 'react-redux';
import { getUpdatedUserRecordRequest } from '../../redux/actionCreators'
// import stripe from 'tipsi-stripe'

// stripe.setOptions({
//   publishableKey: 'pk_test_51IDRhaIdmUDlgC55AA04mjrDlFzi81KJTM3Lk5dJRIeg3y6J68BldfdBZxIzK7BWaBeSMuw0jEoiQlGmLalyOmGj00NoZtKwHo',
// })

const CardDetail = (props) => {

  const dispatch = useDispatch()
  const {authedUser} = useSelector(state=> state.authedUser)

  const [cardNumber, setCardNumber] = useState('')
  const [expiryMonth, setExpiryMonth] = useState('')
  const [expiryYear, setExpiryYear] = useState('')
  const [CVV, setCVV] = useState('')


  const handleAddCard = async () => {
    if(!expiryMonth || !expiryYear || !CVV || !cardNumber){
      alert("all fields are required!")
      return
    }
    console.log({
      number: cardNumber,
      cvc: CVV,
      expMonth: Number(expiryMonth),
      expYear: Number(expiryYear),
  })

  const res = await api.generateTokenForCard({
    cardNumber,
    CVV,
    expiryMonth,
    expiryYear
  })

  console.log("res outside",res)

  if(res.id){
  await api.addCard({
    token: res.id,
    card_name: res.card.last4
  },authedUser.token)
  .then(res=>{
    console.log("response from add-card/ api",res)
    dispatch(getUpdatedUserRecordRequest(authedUser.token))
    props.navigation.navigate('OnlinePayment')
  })
  .catch(error=>console.log("error from add-card/ api",error))
}else{
  alert("something went wrong with fetching from stripe api!")
}
}

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

        {/* <InputWrapper>
          <CardNameInput placeholder="Name of card" />
          <InputIcon source={card} />
        </InputWrapper> */}

        <InputWrapper>
          <CardNameInput 
            placeholder="Card Number"
            value={cardNumber}
            maxLength={16}
            keyboardType={'numeric'}
            onChangeText={(text)=>setCardNumber(text)}
          />
          <InputIcon source={card} />
        </InputWrapper>

        <TwoDropdownRow>
          <InputWrapper widthValue='50%'>
            <CardNameInput 
              placeholder="Expiry Month"
              value={expiryMonth}
              maxLength={2}
              keyboardType={'numeric'}
              onChangeText={(text)=>setExpiryMonth(text)}
            />
            <InputIcon source={dropdown} />
          </InputWrapper>

          <InputWrapper widthValue='50%'>
            <CardNameInput 
              placeholder="Expiry Year"
              value={expiryYear}
              maxLength={4}
              keyboardType={'numeric'}
              onChangeText={(text)=>setExpiryYear(text)}
            />
            <InputIcon source={dropdown} />
          </InputWrapper>
        </TwoDropdownRow>

        <InputWrapper>
          <CardNameInput 
            placeholder="CVV" 
            value={CVV}
            maxLength={3}
            keyboardType={'numeric'}
            onChangeText={(text)=>setCVV(text)}
          />
          <InputIcon source={passwordIcon} />
        </InputWrapper>

        <TouchableOpacity onPress={handleAddCard}>
        <AddCardButton>Add Card</AddCardButton>
        </TouchableOpacity>
      </WrapperContent>

    </Wrapper>
    
  );
};

export default CardDetail;