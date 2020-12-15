import { Dimensions } from 'react-native'
import styled from 'styled-components'

const winWidth = Dimensions.get('window').width


export const Wrapper = styled.ScrollView`
  width: ${winWidth - 32}px;
  margin: 0px auto;
`

export const HeadingView = styled.View`
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 25px;
`

export const BackArrow = styled.Image`
  position: absolute;
  top: 5px;
  left: 0px;
`

export const MainHeading = styled.Text`
  height: 24px;
  font-family: Mazzard;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 24px;
  text-transform: capitalize;
  color: #1E201D;
`
export const OrderCount = styled.Text`
  position: absolute;
  right: 0px;
  top: 5px;
`

export const OrderContainer = styled.View`
  width: 100%;
  height: 96px;
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-bottom: 27px;
`

export const OrderSubContainer1 = styled.View`
  width: 45%;
  height: 90%;
  margin-left: -10px;
`

export const OrderSubContainer2 = styled.View`
  width: 27%;
  height: 90%;
  justify-content: center;
  margin-right: -17px;
`

export const DeleteOrder = styled.Image`
  position: absolute;
  top: -14px;
  right: 20px;
` 

export const OrderId = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #1E201D;
  margin-top: 10px;
`

export const ItemCount = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #D51E16;
`

export const ItemNames = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #545454;
  margin-top: -5px;
`

export const Amount = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  text-transform: capitalize;
  color: #545454;
  margin-bottom: 7px;
`

export const ReOrder = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 17px;
  text-align: right;
  text-transform: uppercase;
  color: #D51E16;
`