import React, {useState} from 'react';
import skipIcon from '../../assets/editProfile/skip.png';
import userIcon from '../../assets/editProfile/person.png';
import emailIcon from '../../assets/editProfile/email.png';
import phoneIcon from '../../assets/editProfile/phone.png';
import {
  ChangePasswordWrapper,
  ChangePasswordContent,
  ChangePasswordHeading,
  InputWrapper,
  OldPasswordInput,
  InputIcon,
  NewPasswordInput,
  ConfirmNewPasswordInput,
  SaveButton,
  ExitButton,
  Legend,
  Wrapper
} from './StyledComponent';
import { Image, TouchableOpacity } from 'react-native';
import api from '../../utils/apiUtils/api';
import { useSelector } from 'react-redux';

const ChangePassword = (props) => {
  const {authedUser} = useSelector(state => state.authedUser)
  const [oldPassFocus, setOldPassFocus] = useState(false);
  const [newPassFocus, setNewPassFocus] = useState(false);
  const [confirmNewPassFocus, setConfirmNewPassFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [oldPassword,setOldPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [newPassword2,setNewPassword2] = useState('')

  const onSubmit = () => {
    if(!oldPassword || !newPassword || !newPassword2){
      alert("all fields are required!")
      return
    }
    if(newPassword!==newPassword2){
      alert("Password did not match!")
      return
    }

    api.changePwd({password: newPassword},authedUser.token)
    .then(res=>{
      alert("password change sucessfully!")
      console.log("change password res",res)
      props.navigation.navigate("Profile")
    })
    .catch(err=>{
      alert("Password change unsuccessfull, Please try again!  ")
    })
  }

  const { navigation } = props

  console.log({oldPassword,newPassword,newPassword2})
  return (
    <Wrapper>
    <ChangePasswordWrapper
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      showsVerticalScrollIndicator={false}
      >
      <ExitButton onPress={()=>navigation.goBack()} >
      <Image source={skipIcon} />
      </ExitButton>

      <ChangePasswordContent behavior="padding">
        <ChangePasswordHeading>Change Password</ChangePasswordHeading>
        <InputWrapper>
          {oldPassFocus && <Legend widthValue='100px' >Old Password</Legend>}

          <OldPasswordInput
            placeholder="Enter Old Password"
            onFocus={() => setOldPassFocus(true)}
            onBlur={() => setOldPassFocus(false)}
            isFocused={oldPassFocus}
            onChangeText={(text)=>setOldPassword(text)}
          />
          <InputIcon source={userIcon} />
        </InputWrapper>

        <InputWrapper>
          {newPassFocus && <Legend widthValue='140px' >Enter new password</Legend>}
          <NewPasswordInput
            placeholder="Enter New Password"
            onFocus={() => setNewPassFocus(true)}
            onBlur={() => setNewPassFocus(false)}
            isFocused={newPassFocus}
            onChangeText={(text)=>setNewPassword(text)}
          />
          <InputIcon source={userIcon} />
        </InputWrapper>

        <InputWrapper>
          {confirmNewPassFocus && <Legend widthValue='160px' >Confirm new password</Legend>}
          <ConfirmNewPasswordInput
            placeholder="Confirm new password"
            onFocus={() => setConfirmNewPassFocus(true)}
            onBlur={() => setConfirmNewPassFocus(false)}
            isFocused={confirmNewPassFocus}
            onChangeText={(text)=>setNewPassword2(text)}
          />
          <InputIcon source={emailIcon} />
        </InputWrapper>
    <TouchableOpacity onPress={()=>onSubmit()}>
        <SaveButton>Save</SaveButton>
        </TouchableOpacity>

      </ChangePasswordContent>
    </ChangePasswordWrapper>
    </Wrapper>
  );
};

export default ChangePassword;
