import React, { useEffect, useState } from 'react'
import {View, Text, Image, TouchableOpacity, StatusBar, BackHandler} from 'react-native'
import { 
  Wrapper,
  TimeLeft,
  OrderStatusHeading,
  OrderStatus,
  GoToHomeButton
} from './StyledComponents'
import heroImage from '../../assets/images/order.png'
import { useDispatch, useSelector } from 'react-redux'
import {setFooterColor, setMinutesForReducer, setSecondsForReducer} from '../../redux/actionCreators'
import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

export default ({navigation}) => {


  const [focus,setFocus] = useState(useIsFocused())

  const dispatch = useDispatch()

  const {authedUser} = useSelector(state=>state.authedUser)

  const [orderStatus,setOrderStatus] = useState({
    color:'#0AC3D1',
    time:'10:00',
    status: 'Snag it'
  })

  const { timeStampAtWhichOrderPlaced, isOrderInPlace, secondsInReducer, minutesInReducer } = useSelector(state => state.orderStatusReducer )

  // useEffect(()=>{
  //   focus && dispatch(setFooterColor(orderStatus.color))

  //   const backAction = () => {
  //     dispatch(setFooterColor('white'))
  //     navigation.goBack()
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();

  // },[])

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
        <FocusAwareStatusBar barStyle="light-content" backgroundColor={orderStatus.color} />

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
