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
import { Image } from 'react-native';

const ChangePassword = (props) => {
  const [oldPassFocus, setOldPassFocus] = useState(false);
  const [newPassFocus, setNewPassFocus] = useState(false);
  const [confirmNewPassFocus, setConfirmNewPassFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const { navigation } = props
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
          />
          <InputIcon source={emailIcon} />
        </InputWrapper>

        <SaveButton>Save</SaveButton>

      </ChangePasswordContent>
    </ChangePasswordWrapper>
    </Wrapper>
  );
};

export default ChangePassword;
