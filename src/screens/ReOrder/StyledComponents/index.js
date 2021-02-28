import styled from 'styled-components'

export const Scroller = styled.ScrollView`
  width: 100%;
`
export const Wrapper = styled.View`
  width: 100%;
  flex-direction: column;
  min-height: 900px
  align-items: center;
  justify-content: center;
  padding-bottom: 160px;
`
export const OrderDetailsHeading = styled.Text`

font-family: MazzardH-Bold;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 30px;
text-transform: capitalize;
color: #1E201D;

`

export const Date = styled.Text`

margin-top: 10px;
font-family: MazzardH-Light;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 146% */


color: #545454;

`
export const OrderId = styled.Text`
margin-top: 10px;
font-family: MazzardH-Regular;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: #EDA920;
`

export const Separator = styled.View`
  width: 254px;
  height: 0px;
  border: 1px solid #ECECEC;
  margin-top: 25px;
  margin-bottom: 25px;
`

export const TotalItemsHeading = styled.Text`
font-family: MazzardH-Regular;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

text-transform: capitalize;

color: #1E201D;
width: 360px;
margin-bottom: 19px;
`

export const StatusText = styled.Text`
font-family: MazzardH-Bold;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

text-transform: capitalize;

color: #1E201D;

`


export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 90%;
  height: 69px;
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

export const QuantityContainer = styled.Text`
  width: 53px;
  height: 53px;
  font-family: Mazzard;
  font-style: normal;
  font-weight: 600;
  padding-left: 22px;
  padding-top: 15px;
  font-size: 16px;
  color: #D51E16;
  background: #FCEDEC;
  border-radius: 53px;
`

export const TotalRow = styled.View`
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 90%;
`

export const DeliverRow = styled.View`
  flex-direction: column;
  position: relative;
  width: 90%;
`

export const ContainerForVerticalObjects = styled.View`
flex-direction: column;
position: relative;
`

export const TotalHeading = styled.Text`
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #545454
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

export const DoneText = styled.Text`
  position: absolute;
  right: 0px;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #EDA920;
`

export const ReorderBtnText = styled.Text`
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #FFF;
`

export const ReorderBtn = styled.TouchableOpacity`
  width: 343px;
  height: 45px;
  color: #FFF;
  background: #D51E16;
  border-radius: 59px;
  padding-top: 10px;
  padding-left: 130px;
  margin-top: 80px;
`
