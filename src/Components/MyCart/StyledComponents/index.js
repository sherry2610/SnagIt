import styled from 'styled-components'

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

export const SkipButton = styled.Image`
  margin-left: 80px;
`

export const CartHeader = styled.View`
  width: 100%;
  flex-direction: row;
  height: 78px;
  background-color: #D51E16;
  justify-content: space-around;
  padding-top: 20px;
  margin-bottom: 25px;
`

export const CounterView = styled.View`
  flex-direction: row;
`

export const FunctionBtnDec = styled.View`
  position: relative;
  width:25px;
  height:22px;
  background: #EDA920;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`

export const FunctionBtnInc = styled.View`
  position: relative;
  width:25px;
  height:22px;
  background: #EDA920;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`

export const Quantity = styled.Text`
  width: 38px;
  text-align: center;
  padding-top: 4px;
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 10.5797px;
  line-height: 13px;
  color: #686868;
`

export const HeadingView = styled.View`
  flex-direction: column;
`

export const CartHeading = styled.Text`
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 29px;
  text-transform: capitalize;
  color: #FFFFFF;
`

export const ItemCountSubHeading = styled.Text`
  height: 21px;
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
`

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  padding-top: 7px;
  margin-bottom: 10px;
`

export const CartProductImage = styled.Image`

`


export const ProdNameContainer = styled.View`
  flex-direction: column;
`

export const ProductName = styled.Text`
  width: 120px;
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #545454;
  margin-bottom: 5px;
`

export const Counter = styled.Image`
  
`

export const ProductPrice = styled.Text`
  font-family: MazzardH-Bold;
  font-style: normal;
  height: 40px;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-transform: capitalize;
  color: #1E201D;
  padding-top: 10px;
  padding-left: 13px;
  border-left-color: #ECECEC;
  border-left-width: 1px;
`

export const Separator = styled.View`
  width: 254px;
  height: 0px;
  border: 1px solid #ECECEC;
  margin-top: 25px;
  margin-bottom: 25px;
`

export const TipContainer = styled.View`
  
`

export const TipHeading = styled.Text`
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: #1E201D;
  margin-bottom: 5px;

`

export const TipDropdown = styled.View`
  width: 254px;
  height: 47px;
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px;
  margin-bottom: 20px;
`

export const TipOption = styled.Text`
  font-family: MazzardH-Regular;
  font-style: normal;
  width: 84%;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1E201D;
  border-right-color: #ECECEC;
  border-right-width: 1px;
`

export const DropdownIcon = styled.Image`
  position: absolute;
  right: 10px;

`

export const PromoCodeInput = styled.TextInput`
  width: 100%;
  height: 45px;
  background: #F6F6F6;
  border-radius: 10px;
  padding: 12px 0px 12px 19px;
`

export const InputWrapper = styled.View`
  width: 254px;
  position: relative;
  margin-bottom: 10px;

`


export const InputIcon = styled.Image`
  position: absolute;
  bottom: 15px;
  right: 16px;
`

export const TotalRow = styled.View`
  width: 254px;
  flex-direction: row;
  align-items: center;
  position: relative;
`

export const TotalHeading = styled.Text`
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #EDA920;
`

export const TotalAmount = styled.Text`
  position: absolute;
  right: 0px;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 29px;
  text-transform: capitalize;
  color: #1E201D;
`

export const DeliveryAddressHeading = styled.Text`
  width: 254px;
  margin-bottom: 5px;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: #1E201D;
`

export const DeliveryAddressInput = styled.TextInput`
  width: 251px;
  height: 74px;
  background: #F6F6F6;
  border-radius: 10px;
  margin-bottom: 20px;
`

export const PreviousAddressHeading = styled.Text`
  width: 251px;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #EDA920;
  margin-bottom: 9px;
`

export const AddressRow = styled.View`
  width: 254px;
  flex-direction: column;
  margin-bottom: 15px;
` 

export const AddressText = styled.Text`
  width: 90%;
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #545454;
`

export const Checked = styled.Image`
  position: absolute;
  right: 0px;
`

export const OrderNumberRow = styled.View`
  width: 254px;
  flex-direction: row;
  margin-bottom: 30px;
`

export const OrderText = styled.Text`
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #545454;
`

export const OrderNumber = styled.Text`
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #EDA920;
  margin-left: 5px;
`

export const ProceedFromCart = styled.Image`
  width: 100%;
`