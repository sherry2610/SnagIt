import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native'
import {
  Wrapper,
  HeadingView,
  BackArrow,
  MainHeading,
  OrderCount,
  OrderContainer,
  OrderSubContainer1,
  OrderSubContainer2,
  DeleteOrder,
  ItemNames,
  ItemCount,
  OrderId,
  Amount,
  ReOrder
} from './StyledComponents'
import api from '../../utils/apiUtils/api'
import back from '../../assets/general/backArrow.png'
import remove from '../../assets/general/remove.png'
import { useSelector } from 'react-redux';
import { getProductNameById } from '../../utils/helperUtils/generalUtils';

const PastOrders = (props) => {

  const {authedUser} = useSelector(state => state.authedUser)
  const {allProducts} = useSelector(state => state.productReducer)

  const [orderHistory, setOrderHistory] = useState([])

  useEffect(()=>{

    if(authedUser.token){
      async function fetchHistory(){
        await api.getOrderHistory(authedUser.token)
          .then(res=>{
            console.log("res order history",res)
            if(res.success){
              setOrderHistory(res.orders)
            }else{
              console.log("error in fetching order history")
            }
          })
          .catch(error=>{
            console.log("error order history",error)
          })
      }
      fetchHistory()
    }
  },[authedUser.token])

  const { navigation } = props

  if(authedUser.token){
  return (
    <>
    <Wrapper
    showsVerticalScrollIndicator={false}
    >
      <HeadingView>
        <BackArrow onPress={()=>navigation.goBack()} >
          <Image source={back} />
        </BackArrow>
        <MainHeading>Past Orders</MainHeading>
        <OrderCount>({orderHistory.length})</OrderCount>
      </HeadingView>

      {
        
        !orderHistory.length ?
        <Text>No Order History exists to show yet!</Text>
        :
        orderHistory.map(order=>{
          return <OrderContainer>

          <OrderSubContainer1>
            <OrderId>Order ID #{order._id.substring(order._id.length - 8)}</OrderId>
            <ItemCount>Items ({order.items.length})</ItemCount>
            <ItemNames>{order.items.map(it=>{
              return `${getProductNameById(it.product,allProducts)?getProductNameById(it.product,allProducts):'Not exist now'}, `
            })}</ItemNames>
            
          </OrderSubContainer1>
  
          <OrderSubContainer2>
            <Amount>{order.total} $</Amount>
            <TouchableOpacity onPress={()=>{
              // alert("re-order screen is not active yet!")
              navigation.navigate("ReOrder",{orderDetails:order})
              }}>
            <ReOrder>RE-ORDER</ReOrder>
            </TouchableOpacity>
          </OrderSubContainer2>
          <DeleteOrder source={remove} />
  
        </OrderContainer>
  
        })
      }




    </Wrapper>
    </>
  );
}else{
  navigation.navigate('SignIn',{
    fromPastOrders:true
  })
  return <></>
  // return <Wrapper><Text>Sign In Required!</Text></Wrapper>
}
};

export default PastOrders;