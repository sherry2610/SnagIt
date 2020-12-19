import { Dimensions } from 'react-native'
import styled from 'styled-components'

const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width

export const Wrapper = styled.View`
  width: ${winWidth-32}px;
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
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #1E201D;
`

export const Options = styled.View`
  width: 100%;
  flex-direction: row;
  border-bottom-width: 2px;
  border-bottom-color: #ECECEC;
  margin-top: 25px;
  padding-bottom: 19px;
  padding-top: 18px;
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

export const OnOffButton = styled.Image`
  position: absolute;
  right: 23px;
  top: 23px;

`