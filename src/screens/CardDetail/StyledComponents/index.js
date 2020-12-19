import styled from 'styled-components'
import { Dimensions } from 'react-native'

const winWidth = Dimensions.get('window').width

export const Wrapper = styled.ScrollView`
  width: ${winWidth - 32}px;
  margin: 20px auto;
`

export const SkipButton = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 0px;
`

export const WrapperContent = styled.KeyboardAvoidingView`
  width: 100%;
  margin-top: 112px;

`

export const MainHeading = styled.Text`
  font-size: 30px;
  width: 100%;
  text-align: center;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 29px;

  text-transform: capitalize;

  color: #1E201D;
`

export const CardOptionsImages = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ECECEC;
`

export const CardImage = styled.Image`
  margin-right: 4px;
`

export const InputWrapper = styled.View`
  height: 45px;
  width: ${props => props.widthValue ? props.widthValue : '100%'};
  position: relative;
  margin-bottom: 10px;
  padding-horizontal: 10px;
`

export const CardNameInput = styled.TextInput`
  width: 100%;
  height: 45px;
  padding-left: 20px;
  background-color: #F6F6F6;
  border-radius: 59px;
  margin-bottom: 5px;
`

export const InputIcon = styled.Image`
  position: absolute;
  bottom: 15px;
  right: 26px;
`

export const TwoDropdownRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`

export const AddCardButton = styled.Text`
  width: 96%;
  background: #D51E16;
  border-radius: 59px;
  padding: 15px 0px;
  margin: 20px 0px;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 5px;
  margin-left: 5px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
`