import React from 'react';
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
  ProceedFromCart
} from './StyledComponents'
import skip from '../../assets/myCart/skip.png'
import counter from '../../assets/myCart/counter.png'
import prodImg1 from '../../assets/myCart/cardProd1.png'
import dropdown from '../../assets/myCart/dropdown.png'
import promoIcon from '../../assets/myCart/promoIcon.png'
import checked from '../../assets/myCart/checked.png'
import snagBtn from '../../assets/general/snagButton.png'
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const MyCart = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
    <Wrapper>
      <CartHeader>
        <HeadingView>
          <CartHeading>My Cart</CartHeading>
          <ItemCountSubHeading>(2 Items)</ItemCountSubHeading>
        </HeadingView>
        <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.closeDrawer())} >
        <SkipButton source={skip}  />
        </TouchableOpacity>

      </CartHeader>

      <ItemContainer>
        <CartProductImage source={prodImg1} />
        <ProdNameContainer>
          <ProductName>
            Smarties
          </ProductName>
          <Counter source={counter} />
        </ProdNameContainer>
        <ProductPrice>$4.59</ProductPrice>
      </ItemContainer>


      <ItemContainer>
        <CartProductImage source={prodImg1} />
        <ProdNameContainer>
          <ProductName>
            Smarties
          </ProductName>
          <Counter source={counter} />
        </ProdNameContainer>
        <ProductPrice>$4.59</ProductPrice>
      </ItemContainer>

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
        <TotalAmount>$12.18</TotalAmount>
      </TotalRow>

      <Separator></Separator>

      <DeliveryAddressHeading>Delivery Address</DeliveryAddressHeading>
      <DeliveryAddressInput placeholder="Enter address" multiline={true} numberOfLines={4} />

      <PreviousAddressHeading>Previous Address:</PreviousAddressHeading>
      <AddressRow>
        <AddressText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</AddressText>
        <Checked source={checked} />
      </AddressRow>
      

      <AddressRow>
        <AddressText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</AddressText>
        <Checked source={checked} />
      </AddressRow>

      <Separator></Separator>

      <OrderNumberRow>
        <OrderText>Order</OrderText>
        <OrderNumber>ID #2701567</OrderNumber>
      </OrderNumberRow>

      <ProceedFromCart source={snagBtn} />
    </Wrapper>
    </DrawerContentScrollView>
  );
};

export default MyCart;