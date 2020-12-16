import React from 'react';
import { Image } from 'react-native'
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
import back from '../../assets/general/backArrow.png'
import remove from '../../assets/general/remove.png'

const PastOrders = (props) => {

  const { navigation } = props

  return (
    <>
    <Wrapper>
      <HeadingView>
        <BackArrow onPress={()=>navigation.goBack()} >
          <Image source={back} />
        </BackArrow>
        <MainHeading>Past Orders</MainHeading>
        <OrderCount>(3)</OrderCount>
      </HeadingView>
      <OrderContainer>

        <OrderSubContainer1>
          <OrderId>Order ID #2701567</OrderId>
          <ItemCount>Items (2)</ItemCount>
          <ItemNames>Smarties mini, Wild Hemp</ItemNames>
        </OrderSubContainer1>

        <OrderSubContainer2>
          <Amount>$12.18</Amount>
          <ReOrder>RE-ORDER</ReOrder>
        </OrderSubContainer2>
        <DeleteOrder source={remove} />

      </OrderContainer>
      
      <OrderContainer>

        <OrderSubContainer1>
          <OrderId>Order ID #2701567</OrderId>
          <ItemCount>Items (2)</ItemCount>
          <ItemNames>Smarties mini, Wild Hemp</ItemNames>
        </OrderSubContainer1>

        <OrderSubContainer2>
          <Amount>$12.18</Amount>
          <ReOrder>RE-ORDER</ReOrder>
        </OrderSubContainer2>
        <DeleteOrder source={remove} />

      </OrderContainer>

      <OrderContainer>

        <OrderSubContainer1>
          <OrderId>Order ID #2701567</OrderId>
          <ItemCount>Items (2)</ItemCount>
          <ItemNames>Smarties mini, Wild Hemp</ItemNames>
        </OrderSubContainer1>

        <OrderSubContainer2>
          <Amount>$12.18</Amount>
          <ReOrder>RE-ORDER</ReOrder>
        </OrderSubContainer2>
        <DeleteOrder source={remove} />

      </OrderContainer>

    </Wrapper>
    </>
  );
};

export default PastOrders;