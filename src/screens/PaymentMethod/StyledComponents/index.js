import { Dimensions } from 'react-native'
import styled from 'styled-components'
const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width


export const PaymentMethodWrapper = styled.View`
  width: ${winWidth - 32}px;
  margin: 0px auto;
  height: ${winHeight - 150}px;
  position: relative;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
`

export const HeadingView = styled.View`
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`

export const BackArrow = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  left: 0px;
`

export const MainHeading = styled.Text`
  height: 24px;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 24px;
  text-transform: capitalize;
  color: #1E201D;
`

export const Description = styled.Text`
  width: 100%;
  height: 41px;
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #545454;
`

export const PaymentOptions = styled.View`
  width: 100%;
  height: 59px;
  flex-direction: row;
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  margin-top: 25px;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  padding-bottom: 20px;
  padding-top: 18px;
  padding-left: 19px;
`

export const RadioButton = styled.Image`
  margin-right: 14px;
`

export const Option = styled.Text`
  width: 73%;
  height: 42px;

  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #545454;
  margin-top: -10px;
  padding-top: 14px;
  border-right-color: #ECECEC;
  border-right-width: 1px;
`

export const ForwardIcon = styled.TouchableOpacity`
  position: absolute;
  right: 23px;
  top: 23px;

`