import React, { useEffect, useState } from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { 
  Wrapper,
  TimeLeft,
  OrderStatusHeading,
  OrderStatus,
  GoToHomeButton
} from './StyledComponents'
import heroImage from '../../assets/images/order.png'
import { useDispatch, useSelector } from 'react-redux'
import {setMinutesForReducer, setSecondsForReducer} from '../../redux/actionCreators'

export default ({navigation}) => {


  const dispatch = useDispatch()

  const {authedUser} = useSelector(state=>state.authedUser)

  const [orderStatus,setOrderStatus] = useState({
    color:'#0AC3D1',
    time:'10:00',
    status: 'Snag it'
  })

  const { timeStampAtWhichOrderPlaced, isOrderInPlace, secondsInReducer, minutesInReducer } = useSelector(state => state.orderStatusReducer )

  useEffect(()=>{
    
    if(minutesInReducer>0 && minutesInReducer<=8){
      setOrderStatus({
        color:'#EDA920',
        time:'08:00',
        status: 'Scootn Over!'
      })
    }
    if(minutesInReducer==0 && secondsInReducer==0){
      setOrderStatus({
        color:'#D51E16',
        time:'00:00',
        status: 'Arrived! ORDER COMPLETE!!'
      })
    }
    
  },[minutesInReducer])


  if(!authedUser.token){

    return (
      <Wrapper color={orderStatus.color}>
        <View>
          <Text>Sign In required!</Text>
        </View>
    </Wrapper>

    )

  }
  else {
    return (
      <Wrapper color={orderStatus.color}>
        <OrderStatusHeading>Order status</OrderStatusHeading>

        {!isOrderInPlace && <Text>Currently there is no Order in placed!</Text>}

        <Image source={heroImage} />

        <OrderStatus>{orderStatus.status}</OrderStatus>
        <TimeLeft>{minutesInReducer}:{secondsInReducer < 10 ?  `0${secondsInReducer}` : secondsInReducer}</TimeLeft>

        <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} >
        <GoToHomeButton>Go To Home</GoToHomeButton>
        </TouchableOpacity>

      </Wrapper>
    )
  }
}
