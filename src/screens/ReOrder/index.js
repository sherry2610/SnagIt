import React, { useEffect, useState } from 'react';
import { View, Image, Modal, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
  Wrapper,
  OrderDetailsHeading,
  Date,
  OrderId,
  Separator,
  TotalItemsHeading,
  StatusText,
  ProductName,
  DeliverRow,
  ProdNameContainer,
  ItemContainer,
  CartProductImage,
  ProductPrice,
  QuantityContainer,
  TotalRow,
  TotalAmount,
  TotalHeading,
  ContainerForVerticalObjects,
  DoneText,
  ReorderBtn,
  ReorderBtnText,
  Scroller

} from './StyledComponents'
import skip from '../../assets/myCart/skip.png'
import incIcon from '../../assets/images/incIcon.png'
import decIcon from '../../assets/images/decIcon.png'
import { useSelector, useDispatch } from 'react-redux'
import prodImg1 from '../../assets/myCart/cardProd1.png'
import dropdown from '../../assets/myCart/dropdown.png'
import promoIcon from '../../assets/myCart/promoIcon.png'
import checked from '../../assets/myCart/checked.png'
import snagBtn from '../../assets/general/snagButton.png'
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { 
  quantityChange,
  editCartRequestWhenQuantityChange,
  setCartToInitialState,
  setCardName,
  setTimeStampAtWhichOrderPlaced,
  setOrderInPlace
} from '../../redux/actionCreators';
import { getProductById, getProductImageById, getProductNameById, getProductPriceById } from '../../utils/helperUtils/generalUtils'
import _ from 'underscore'
import api from '../../utils/apiUtils/api';

const ReOrder = ({ navigation, route }) => {

  const dispatch = useDispatch()
  const {authedUser, card_name} = useSelector(state=>state.authedUser)
  const { timeStampAtWhichOrderPlaced, isOrderInPlace, secondsInReducer, minutesInReducer } = useSelector(state => state.orderStatusReducer )
  const {cart,Total} = useSelector(state=>state.cartReducer)
  const [cartItems, setCartItems] = useState([])
  const {allProducts} = useSelector(state => state.productReducer)
  // const [allProducts, setAllProducts] = useState([])
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [modalVisible, setModalVisible] = useState(false);

// useEffect(()=>{
//   api.getAllProducts()
//   .then(res=>{
//     if(res.success){
//       setAllProducts(res.products)
//     }
//   })
//   .catch(err=>{
//     console.log("error in fetching all products",err)
//   })
// },[])

  // useEffect(()=>{

  //   let cartItem = []
  //     allProducts.forEach(prod=>(
  //       route.params.orderDetails.items.forEach(c=>{
  //         if(prod._id===c.product_id){
  //           let item = {
  //             ...prod,
  //             quantity: c.quantity,
  //           }
  //         cartItem.push(item)
  //         }
  //       })
  //     ))
  //     setCartItems(cartItem)

  // },[cart.length])

  // const handleQuantity = async (id,price,opt) => {
    
  //   const updatedCartItems = cartItems.map(item=>{
  //     if(item._id===id){
  //       let chk = opt==='inc'?
  //                   Number(item.quantity) + 1 : 
  //                   Number(item.quantity)!==0 ? 
  //                   Number(item.quantity) - 1 : 
  //                   Number(item.quantity)
  //       if(authedUser.token){
  //       dispatch(editCartRequestWhenQuantityChange({
  //         currCart: cart,
  //         quantity:chk,
  //         price,
  //         opt,
  //         id,
  //         token: authedUser.token
  //       }))
  //     }else{
  //       dispatch(quantityChange({
  //         quantity:chk,
  //         price,
  //         opt,
  //         id
  //       }))
  //     }
  //       return {
  //         ...item,
  //         quantity: opt==='inc'?
  //         Number(item.quantity) + 1 : 
  //         Number(item.quantity)!==1 ? 
  //         Number(item.quantity) - 1 : 
  //         Number(item.quantity)
  //       }
  //     } 
  //     return item
  //   })
  //   setCartItems(updatedCartItems)

  // }

  // const handleCheckout = async () => {
  //   if(!cart.length){
  //     alert('Cart is empty!')
  //     return
  //   }
  //   else if(!deliveryAddress){
  //     alert('Kindly provide delivery address.')
  //     return
  //   }
  //   else if(!authedUser.token){
  //     navigation.navigate("SignIn",{fromMyCart:true})
  //     return
  //   }
  //   else if(!authedUser.user.cards.length){
  //     alert("You need to add and select card details for checkout from payment method or if you want to pay from paypal just go to payment method and select paypal")
  //     return
  //   }
  //    else if(!card_name){
  //       // alert("select card from payment method -> Credit/Debit Card and then checkout from here")
  //       setModalVisible(true);
  //       // return <Modal><Text>abc</Text></Modal>
  //       return
  //     }
  //     else if(isOrderInPlace){
  //       alert("Currently there is an order processing for you. Try again when it finishes!")
  //       return
  //     }
  //     else{
  //       console.log('+++++++++++++++proceed to checkout',Total,card_name,api.placeOrder)
  //       await api.placeOrder({
  //         amount: Number(Total)*100,
  //         card_name
  //       },authedUser.token)
  //       .then(async (res)=>{
  //         console.log("resp after order placed",res)
  //         if(res.success){
  //           // alert("Checkout successfull!")
  //           await dispatch(setCartToInitialState())
  //           await dispatch(setCardName(""))
  //           console.log("CHECKER")
  //           dispatch(setTimeStampAtWhichOrderPlaced(Date.now()))
  //           dispatch(setOrderInPlace(true))
  //           navigation.navigate("OrderStatus")
  //         }else{
  //           alert("something went wrong in checkout!")
  //         }
  //       })
  //       .catch(error=>console.log("error after order placed",error))
  //       // console.log("resp after order placed",resp)
  //     }

  // }

  console.log("orderDetails data ",route.params.orderDetails)

  return (
    <View style={{flex:1}} >
      <Scroller>
    <Wrapper>
    <OrderDetailsHeading>Order Details</OrderDetailsHeading>
    <Date>{route.params.orderDetails.createdAt.slice(0,10)}</Date>
    <OrderId>ORDER ID # {route.params.orderDetails._id.substring(route.params.orderDetails._id.length - 8)}</OrderId>
    <Separator></Separator>
    <View>
    <TotalItemsHeading>Total Items ({route.params.orderDetails.items.length})</TotalItemsHeading>
    </View>

    {/* <ItemContainer key={ci._id} > */}
    {
    route.params.orderDetails.items.length && 
    route.params.orderDetails.items.map(it=>(
      <ItemContainer >
            <CartProductImage 
              source={{uri:getProductImageById(it.product,allProducts)?getProductImageById(it.product,allProducts):`https://storage.googleapis.com/snaggg-9f621.appspot.com/img_5fd1bf3c.png`}}
              // source={decIcon}
              style={{width:40,height:40}}
            />      
              <ProductName>
                {getProductNameById(it.product,allProducts)?getProductNameById(it.product,allProducts):"Not exist Now"}
              </ProductName>
            <QuantityContainer>{it.quantity}</QuantityContainer>
            <ProductPrice>${getProductPriceById(it.product,allProducts)?getProductPriceById(it.product,allProducts):0}</ProductPrice>
          </ItemContainer>

          

    ))
    }
    <Separator></Separator>
    <TotalRow>
      <ContainerForVerticalObjects>
      <TotalHeading>
          Tips of Snag <OrderId>${route.params.orderDetails.tip}</OrderId>
        </TotalHeading> 
        <TotalHeading>
          Promo code <OrderId>5**2</OrderId>
        </TotalHeading> 
      </ContainerForVerticalObjects>

        <TotalAmount>${route.params.orderDetails.total}</TotalAmount>
      </TotalRow>

      <Separator></Separator>

      <TotalRow>
      <StatusText>
          STATUS
        </StatusText> 

        <DoneText>DONE</DoneText>
      </TotalRow>

      <Separator></Separator>

<DeliverRow>
      <StatusText>
          Deliver Address
        </StatusText> 
        <ProductName>
          {route.params.orderDetails.delivery_address}
        </ProductName>

        </DeliverRow>

        <Separator></Separator>

      <ReorderBtn><ReorderBtnText>Re Order</ReorderBtnText></ReorderBtn>



    </Wrapper>
    </Scroller>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    width: 80,
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    margin:10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:14
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ReOrder;