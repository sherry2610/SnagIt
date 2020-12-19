import styled from 'styled-components'
import { Dimensions } from 'react-native'

const winWidth = Dimensions.get('window').width
const winHeight = Dimensions.get('window').height

export const Wrapper = styled.View`
  width: 100%;
  height: ${winHeight}px;
  background-color: #FFFFFF;
`


export const SignInWrapper = styled.ScrollView`
  width: ${winWidth - 32}px;
  margin: 0px auto;
  position: relative;
`

export const SignInContent = styled.KeyboardAvoidingView`
  position: relative;
  top: 112px;
  width: 100%;
  margin-bottom: 250px;
`

export const SignInHeading = styled.Text`
  width: 100%;
  text-align: center;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 30px;
  text-transform: capitalize;

  color: #1E201D;
  
`

export const InputWrapper = styled.View`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  padding-horizontal: 10px;
`

export const InputIcon = styled.Image`
  position: absolute;
  bottom: 20px;
  right: 24px;
`

export const Legend = styled.Text`
  position: relative;
  width: ${props => props.widthValue};
  bottom: -8px;
  left: 20px;
  text-align: center;
  font-weight: bold;
  z-index: 10;
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  color: #EDA920;
  background-color: white;

`

export const EmailInput = styled.TextInput`
width: 100%;
height: 45px;
padding-left: 20px;
background-color: ${props=>props.isFocused?"white":"#F6F6F6"};
border-radius: 59px;
margin-bottom: 5px;
border: ${props => props.isFocused?"1px solid #EDA920" : "0px"};
`

export const SaveButton = styled.Text`
  width: 96%;
  background: #D51E16;
  border-radius: 59px;
  padding: 15px 0px;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 22px;
  margin-top: 55px;
  margin-bottom: 5px;
  margin-left: 5px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
`


export const LastRow = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 25px;
  margin-bottom: 25px;
  justify-content: center;
`

export const RandomText = styled.Text`
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #545454;
`

export const SignUpLink = styled.Text`
font-family: MazzardH-Bold;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 20px;
color: #EDA920;
`