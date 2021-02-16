import React, { useEffect, useState } from 'react';
import { View, Image, Modal, Text, TouchableHighlight, StyleSheet } from 'react-native'
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
  setOrderInPlace
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
    else if(!deliveryAddress){
      alert('Kindly provide delivery address.')
      return
    }
    else if(!authedUser.token){
      alert('you need to signup')
      return
    }
    else if(!authedUser.user.cards.length){
      alert("You need to add and select card details for checkout from payment method or if you want to pay from paypal just go to payment method and select paypal")
      return
    }
     else if(!card_name){
        // alert("select card from payment method -> Credit/Debit Card and then checkout from here")
        setModalVisible(true);
        // return <Modal><Text>abc</Text></Modal>
        return
      }
      else if(isOrderInPlace){
        alert("Currently there is an order processing for you. Try again when it finishes!")
        return
      }
      else{
        console.log('+++++++++++++++proceed to checkout',Total,card_name,api.placeOrder)
        await api.placeOrder({
          amount: Number(Total)*100,
          card_name
        },authedUser.token)
        .then(async (res)=>{
          console.log("resp after order placed",res)
          if(res.success){
            // alert("Checkout successfull!")
            await dispatch(setCartToInitialState())
            await dispatch(setCardName(""))
            console.log("CHECKER")
            dispatch(setTimeStampAtWhichOrderPlaced(Date.now()))
            dispatch(setOrderInPlace(true))
            navigation.navigate("OrderStatus")
          }else{
            alert("something went wrong in checkout!")
          }
        })
        .catch(error=>console.log("error after order placed",error))
        // console.log("resp after order placed",resp)
      }

  }

  console.log("cartReducer data ",{cart,Total})

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
        source={{uri:`https://snagit-server.herokuapp.com/${ci.image}`}}
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
        <TipDropdown>
          <TipOption>$1</TipOption>
          <DropdownIcon source={dropdown} />
        </TipDropdown>

        <InputWrapper>
        <PromoCodeInput placeholder="Apply promo code" />
        <InputIcon source={promoIcon} />
        </InputWrapper>
      </TipContainer>

      <Separator></Separator>

      <TotalRow>
        <TotalHeading>
          Total
        </TotalHeading> 
        <TotalAmount>${Total}</TotalAmount>
      </TotalRow>

      <Separator></Separator>

      <DeliveryAddressHeading>Delivery Address</DeliveryAddressHeading>
      <DeliveryAddressInput 
        placeholder="Enter address" 
        multiline={true} 
        numberOfLines={4}
        onChangeText={text=>setDeliveryAddress(text)}
        />

      {/* <PreviousAddressHeading>Previous Address:</PreviousAddressHeading>
      <AddressRow>
        <AddressText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</AddressText>
        <Checked source={checked} />
      </AddressRow>
      

      <AddressRow>
        <AddressText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</AddressText>
        <Checked source={checked} />
      </AddressRow> */}

      <Separator></Separator>

      {/* <OrderNumberRow>
        <OrderText>Order</OrderText>
        <OrderNumber>ID #2701567</OrderNumber>
      </OrderNumberRow> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select Card for the payment to proceed to checkout.</Text>
<View style={{flexDirection:'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                navigation.navigate('OnlinePayment')
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Select Card</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                navigation.navigate('PaypalScreen')
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Pay with Paypal</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
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