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
} from './StyledComponent';

const ChangePassword = () => {
  const [oldPassFocus, setOldPassFocus] = useState(false);
  const [newPassFocus, setNewPassFocus] = useState(false);
  const [confirmNewPassFocus, setConfirmNewPassFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  return (
    <ChangePasswordWrapper
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      showsVerticalScrollIndicator={false}
      >
      <ExitButton source={skipIcon} />

      <ChangePasswordContent behavior="padding">
        <ChangePasswordHeading>Change Password</ChangePasswordHeading>
        <InputWrapper>
          {oldPassFocus && <Legend widthValue='80px' >Old Password</Legend>}

          <OldPasswordInput
            placeholder="Enter Old Password"
            onFocus={() => setOldPassFocus(true)}
            onBlur={() => setOldPassFocus(false)}
            isFocused={oldPassFocus}
          />
          <InputIcon source={userIcon} />
        </InputWrapper>

        <InputWrapper>
          {newPassFocus && <Legend widthValue='110px' >Enter new password</Legend>}
          <NewPasswordInput
            placeholder="Enter New Password"
            onFocus={() => setNewPassFocus(true)}
            onBlur={() => setNewPassFocus(false)}
            isFocused={newPassFocus}
          />
          <InputIcon source={userIcon} />
        </InputWrapper>

        <InputWrapper>
          {confirmNewPassFocus && <Legend widthValue='140px' >Confirm new password</Legend>}
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
  );
};

export default ChangePassword;
