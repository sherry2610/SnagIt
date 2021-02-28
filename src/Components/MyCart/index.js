import React, { useEffect, useState } from 'react';
import { View, Image, Modal, Text, TouchableHighlight, StyleSheet, Picker } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
  Wrapper,
  CartHeader,
  HeadingView,
  CartHeading,
  ItemCountSubHeading,
  SkipButton,
  ItemContainer,
  CartProductImage,
  ProdNameContainer,
  ProductName,
  Counter,
  ProductPrice,
  Separator,
  TipContainer,
  TipHeading,
  TipDropdown,
  TipOption,
  DropdownIcon,
  PromoCodeInput,
  InputWrapper,
  InputIcon,
  TotalRow,
  TotalHeading,
  TotalAmount,
  DeliveryAddressHeading,
  DeliveryAddressInput,
  PreviousAddressHeading,
  AddressRow,
  AddressText,
  Checked,
  OrderNumberRow,
  OrderText,
  OrderNumber,
  ProceedFromCart,
  FunctionBtnInc,
  FunctionBtnDec,
  CounterView,
  Quantity
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
  setOrderInPlace,
  setComingForCheckout,
  setOrderPayload
} from '../../redux/actionCreators';
import { getProductById } from '../../utils/helperUtils/generalUtils'
import _ from 'underscore'
import api from '../../utils/apiUtils/api';

const MyCart = ({ navigation }) => {

  const dispatch = useDispatch()
  const {authedUser, card_name} = useSelector(state=>state.authedUser)
  const { timeStampAtWhichOrderPlaced, isOrderInPlace, secondsInReducer, minutesInReducer } = useSelector(state => state.orderStatusReducer )
  const {cart,Total} = useSelector(state=>state.cartReducer)
  const [cartItems, setCartItems] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTip, setSelectedTip] = useState('');
  const [pastAddressess, setPastAddressess] = useState([])
  const [promoCode, setPromoCode] = useState('')
  const [selectedAddress, setSelectedAddress] = useState('')
  
  



  useEffect(()=>{


    if(authedUser.token){
      async function fetchHistory(token){
        await api.getOrderHistory(token)
          .then(res=>{
            console.log("res order history",res)
            if(res.success){
              setPastAddressess(res.orders)
            }else{
              console.log("error in fetching order history")
            }
          })
          .catch(error=>{
            console.log("error order history",error)
          })
      }

      fetchHistory(authedUser.token) 
    }
  },[authedUser.token])
  

useEffect(()=>{
  api.getAllProducts()
  .then(res=>{
    if(res.success){
      setAllProducts(res.products)
    }
  })
  .catch(err=>{
    console.log("error in fetching all products",err)
  })
},[])

  useEffect(()=>{

    let cartItem = []
      allProducts.forEach(prod=>(
        cart.forEach(c=>{
          if(prod._id===c.product_id){
            let item = {
              ...prod,
              quantity: c.quantity,
            }
          cartItem.push(item)
          }
        })
      ))
      setCartItems(cartItem)

  },[cart.length])

  const handleQuantity = async (id,price,opt) => {
    
    const updatedCartItems = cartItems.map(item=>{
      if(item._id===id){
        let chk = opt==='inc'?
                    Number(item.quantity) + 1 : 
                    Number(item.quantity)!==0 ? 
                    Number(item.quantity) - 1 : 
                    Number(item.quantity)
        if(authedUser.token){
        dispatch(editCartRequestWhenQuantityChange({
          currCart: cart,
          quantity:chk,
          price,
          opt,
          id,
          token: authedUser.token
        }))
      }else{
        dispatch(quantityChange({
          quantity:chk,
          price,
          opt,
          id
        }))
      }
        return {
          ...item,
          quantity: opt==='inc'?
          Number(item.quantity) + 1 : 
          Number(item.quantity)!==1 ? 
          Number(item.quantity) - 1 : 
          Number(item.quantity)
        }
      } 
      return item
    })
    setCartItems(updatedCartItems)

  }

  const handleCheckout = async () => {
    if(!cart.length){
      alert('Cart is empty!')
      return
    }
    else if(!authedUser.token){
      // dispatch(setComingForCheckout(true))
      navigation.navigate("SignIn",{fromMyCart:true})
      return
    }
    else if(!deliveryAddress && !selectedAddress){
      alert('Kindly provide delivery address.')
      return
    }
    else if(isOrderInPlace){
        alert("Currently there is an order processing for you. Try again when it finishes!")
        return
      }
    else if(!authedUser.user.cards.length){
      dispatch(setComingForCheckout(true))
      dispatch(setOrderPayload({
        amount: Number(Total)*100,
        card_name,
        deliveryAddress,
        tip: tip ? tip : '0',
        promoCode: promoCode ? promoCode : ''
      }))
      navigation.navigate("SignIn")
    }
      else{
        console.log("reached!")
        dispatch(setComingForCheckout(true))
        dispatch(setOrderPayload({
          amount: Number(Total)*100,
          card_name,
          deliveryAddress: deliveryAddress ? deliveryAddress : selectedAddress,
          tip: selectedTip ? selectedTip : '0',
          promoCode: promoCode ? promoCode : ''
        }))
        navigation.navigate("OnlinePayment")
        // console.log("not reached! :(")

        // console.log('+++++++++++++++proceed to checkout',Total,card_name,api.placeOrder)
        // await api.placeOrder({
        //   amount: Number(Total)*100,
        //   card_name,
        //   deliveryAddress
        // },authedUser.token)
        // .then(async (res)=>{
        //   console.log("resp after order placed",res)
        //   if(res.success){
        //     // alert("Checkout successfull!")
        //     await dispatch(setCartToInitialState())
        //     await dispatch(setCardName(""))
        //     console.log("CHECKER")
        //     dispatch(setTimeStampAtWhichOrderPlaced(Date.now()))
        //     dispatch(setOrderInPlace(true))
        //     navigation.navigate("OrderStatus")
        //   }else{
        //     alert("something went wrong in checkout!")
        //   }
        // })
        // .catch(error=>console.log("error after order placed",error))
        // console.log("resp after order placed",resp)
      }

  }

  console.log("cartReducer data ",{cart,Total})

  console.log("pastAddressess, promo, tip ",{pastAddressess, promoCode, selectedTip})

  return (
    <DrawerContentScrollView>
    <Wrapper>
      <CartHeader>
        <HeadingView>
          <CartHeading>My Cart</CartHeading>
          <ItemCountSubHeading>({cart.length} Items)</ItemCountSubHeading>
        </HeadingView>
        <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.closeDrawer())} >
        <SkipButton source={skip}  />
        </TouchableOpacity>

      </CartHeader>
      {cartItems.map(ci=>{
      return <ItemContainer key={ci._id} >
      <CartProductImage 
        source={{uri:`${ci.image}`}}
        style={{width:40,height:40}}
      />
      <ProdNameContainer>
      
        <ProductName>
          {ci.name}
        </ProductName>
        <CounterView >
          <TouchableOpacity onPress={()=>handleQuantity(ci._id,ci.price,'dec')} >
          <FunctionBtnDec>
            <Image source={decIcon} style={{position:'absolute',right:10,top:9}} />
          </FunctionBtnDec>
          </TouchableOpacity>
          <Quantity>{ci.quantity}</Quantity>
          <TouchableOpacity onPress={()=>handleQuantity(ci._id,ci.price,'inc')} >
          <FunctionBtnInc >
          <Image source={incIcon} style={{position:'absolute',right:10,top:8}} />
          </FunctionBtnInc>
          </TouchableOpacity>
        </CounterView>
      </ProdNameContainer>
      <ProductPrice>${ci.price*ci.quantity}</ProductPrice>
    </ItemContainer>
      })}


      <Separator></Separator>

      <TipContainer>
        <TipHeading>Tips for Snag</TipHeading>
        {/* <TipDropdown>
          <TipOption>$1</TipOption> */}
          <Picker
            selectedValue={selectedTip}
            style={{ 
              height: 50,
              width: 254,
              elevation: 5,
              paddingLeft:19
            }}
            onValueChange={(itemValue, itemIndex) => setSelectedTip(itemValue)}
          >
            <Picker.Item label="1$" value="1" />
            <Picker.Item label="2$" value="2" />
            <Picker.Item label="3$" value="3" />
            <Picker.Item label="4$" value="4" />
            <Picker.Item label="5$" value="5" />
          </Picker>
          {/* <DropdownIcon source={dropdown} />
        </TipDropdown> */}

        <InputWrapper>
        <PromoCodeInput 
          placeholder="Apply promo code"
          value={promoCode}
          onChangeText={text=>setPromoCode(text)}
          />
        <InputIcon source={promoIcon} />
        </InputWrapper>
      </TipContainer>

      <Separator></Separator>

      <TotalRow>
        <TotalHeading>
          Total
        </TotalHeading> 
        <TotalAmount>${Number(Total).toFixed(2)}</TotalAmount>
      </TotalRow>

      <Separator></Separator>

      <DeliveryAddressHeading>Delivery Address</DeliveryAddressHeading>
      <DeliveryAddressInput 
        placeholder="Enter address" 
        multiline={true} 
        numberOfLines={4}
        onChangeText={text=>setDeliveryAddress(text)}
        />

 <PreviousAddressHeading>Previous Address:</PreviousAddressHeading>

{
  pastAddressess.length > 0 &&
    pastAddressess.map(address=>address.delivery_address && <TouchableOpacity onPress={()=>setSelectedAddress(address)}>
      <AddressRow>
      <AddressText>{address.delivery_address}</AddressText>
      {address == selectedAddress && <Checked source={checked} />}
    </AddressRow>
    </TouchableOpacity>
    )
}
{/*       

      <AddressRow>
        <AddressText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</AddressText>
        <Checked source={checked} />
      </AddressRow> */}

      <Separator></Separator>

      {/* <OrderNumberRow>
        <OrderText>Order</OrderText>
        <OrderNumber>ID #2701567</OrderNumber>
      </OrderNumberRow> */}
      <TouchableOpacity onPress={()=>handleCheckout()} style={{width:'100%'}}>
      <ProceedFromCart source={snagBtn} />
      </TouchableOpacity>
    </Wrapper>
    </DrawerContentScrollView>
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

export default MyCart;