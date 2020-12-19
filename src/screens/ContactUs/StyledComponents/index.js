import { Dimensions } from 'react-native'
import styled from 'styled-components'

const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width

export const Wrapper = styled.View`
  width: ${winWidth - 32}px;
  margin: 0px auto;
  height: ${winHeight - 130}px;
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
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
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
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #1E201D;
`

export const OptionText = styled.Text`
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #545454
`

export const OptionImage = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 58px;
  border: 1px solid #EDA920;
  position: relative;
  margin-right: 16px;
`



export const OptionIcon = styled.Image`
  position: absolute;
  top: 14px;
  left: 14px;
  
`