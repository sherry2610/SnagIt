import React, {useState} from 'react';
import skipIcon from '../../assets/editProfile/skip.png';
import userIcon from '../../assets/editProfile/person.png';
import emailIcon from '../../assets/editProfile/email.png';
import phoneIcon from '../../assets/editProfile/phone.png';
import {
  EditProfileWrapper,
  EditProfileContent,
  EditProfileHeading,
  InputWrapper,
  FirstNameInput,
  InputIcon,
  LastNameInput,
  EmailInput,
  PhoneInput,
  SaveButton,
  ExitButton,
  Legend,
} from './StyledComponents';

const EditProfile = () => {
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  return (
    <EditProfileWrapper
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      showsVerticalScrollIndicator={false}
      >
      <ExitButton source={skipIcon} />

      <EditProfileContent behavior="padding">
        <EditProfileHeading>Edit Your Account</EditProfileHeading>
        <InputWrapper>
          {firstNameFocus && <Legend widthValue='70px' >First Name</Legend>}

          <FirstNameInput
            placeholder="Jonithan"
            onFocus={() => setFirstNameFocus(true)}
            onBlur={() => setFirstNameFocus(false)}
            isFocused={firstNameFocus}
          />
          <InputIcon source={userIcon} />
        </InputWrapper>

        <InputWrapper>
          {lastNameFocus && <Legend widthValue='70px' >Last Name</Legend>}
          <LastNameInput
            placeholder="Davis"
            onFocus={() => setLastNameFocus(true)}
            onBlur={() => setLastNameFocus(false)}
            isFocused={lastNameFocus}
          />
          <InputIcon source={userIcon} />
        </InputWrapper>

        <InputWrapper>
          {emailFocus && <Legend widthValue='40px' >Email</Legend>}
          <EmailInput
            placeholder="jonithan123@gmail.com"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            isFocused={emailFocus}
          />
          <InputIcon source={emailIcon} />
        </InputWrapper>

        <InputWrapper>
          {phoneFocus && <Legend widthValue='40px' >Phone</Legend>}
          <PhoneInput
            placeholder="123-321-1234"
            onFocus={() => setPhoneFocus(true)}
            onBlur={() => setPhoneFocus(false)}
            isFocused={phoneFocus}
          />
          <InputIcon source={phoneIcon} />
        </InputWrapper>

        <SaveButton>Save</SaveButton>

      </EditProfileContent>
    </EditProfileWrapper>
  );
};

export default EditProfile;
