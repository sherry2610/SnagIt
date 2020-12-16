import { Dimensions } from 'react-native'
import styled from 'styled-components'

const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width

export const Wrapper = styled.ScrollView`
  width: ${winWidth-32}px;
  margin: 0px auto;
  height: ${winHeight - 130}px;
  position: relative;
  flex-direction: column;
  margin-top: 30px;
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
  font-family: Mazzard;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 26px;
  text-transform: capitalize;
  color: #1E201D;
`

export const DescriptionHeading = styled.Text`
  width: 100%;
  font-family: Mazzard;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #EDA920;
  margin-top: 25px;
`

export const Description = styled.Text`
  width: 100%;
  font-family: Mazzard;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: #545454;  
`

export const Options = styled.View`
  width: 100%;
  flex-direction: row;
  
  padding-bottom: 10px;
  padding-top: 18px;
`
export const OptionDetails = styled.View`
  flex-direction: column;
  justify-content: center;
`

export const OptionTag = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #1E201D;
`

export const OptionText = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #545454
`

export const OptionIcon = styled.Image`
  width: 58px;
  height: 58px;
  margin-right: 16px;
`