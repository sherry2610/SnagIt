import styled from 'styled-components'

export const CreateAccountWrapper = styled.ScrollView`
  width: 343px;
  margin: 0px auto;
  position: relative;
  
`

export const ExitButton = styled.Image`
  position: absolute;
  top: 18px;
  right: 0;
`

export const CreateAccountContent = styled.KeyboardAvoidingView`
  position: relative;
  top: 112px;
  width: 100%;
  margin-bottom: 350px;
`

export const CreateAccountHeading = styled.Text`
  width: 100%;
  text-align: center;
  font-family: Mazzard;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;

  text-transform: capitalize;

  color: #1E201D;
  
`

export const Note = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #545454;
  margin-top: 18px;
  margin-bottom: 33px;
`

export const InputWrapper = styled.View`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  padding-horizontal: 10px;
`

export const FirstNameInput = styled.TextInput`
  width: 100%;
  height: 45px;
  padding-left: 20px;
  background-color: ${props=>props.isFocused?"white":"#F6F6F6"};
  border-radius: 59px;
  margin-bottom: 5px;
  border: ${props => props.isFocused?"1px solid #EDA920" : "0px"};
`

export const InputIcon = styled.Image`
  position: absolute;
  bottom: 25px;
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
  font-family: Mazzard;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  color: #EDA920;
  background-color: white;

`

export const LastNameInput = styled.TextInput`
  width: 100%;
  height: 45px;
  padding-left: 20px;
  background-color: ${props=>props.isFocused?"white":"#F6F6F6"};
  border-radius: 59px;
  margin-bottom: 5px;
  border: ${props => props.isFocused?"1px solid #EDA920" : "0px"};
`

export const EmailInput = styled.TextInput`
  width: 100%;
  height: 45px;
  padding-left: 20px;
  background-color: ${props=>props.isFocused?"white":"#F6F6F6"};
  border: ${props => props.isFocused?"1px solid #EDA920" : "0px"};
  background: #F6F6F6;
  border-radius: 59px;
  margin-bottom: 5px;
`

export const PhoneInput = styled.TextInput`
  width: 100%;
  height: 45px;
  background: #F6F6F6;
  border-radius: 59px;
  margin-bottom: 15px;
  padding-left: 20px;
  background-color: ${props=>props.isFocused?"white":"#F6F6F6"};
  border: ${props => props.isFocused?"1px solid #EDA920" : "0px"};
`

export const SaveButton = styled.Text`
  width: 96%;
  background: #D51E16;
  border-radius: 59px;
  padding: 15px 0px;
  font-family: Mazzard;
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

  font-family: Mazzard;
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

export const ForwardIcon = styled.Image`
  position: absolute;
  right: 23px;
  top: 23px;

`

export const TermsAndServicesRow = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 25px;
  margin-bottom: 25px;
`

export const TermRadioBtn = styled.Image`

`

export const AgreeOurText = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #545454;
`

export const TermsOfServicesText = styled.Text`
font-family: Mazzard;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 20px;
color: #EDA920;
`