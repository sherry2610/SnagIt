import React, {useState} from 'react';
import { Image } from 'react-native';
import skipIcon from '../../assets/editProfile/skip.png';
import userIcon from '../../assets/editProfile/person.png';
import emailIcon from '../../assets/editProfile/email.png';
import phoneIcon from '../../assets/editProfile/phone.png';
import paymentMethod from '../../assets/general/paymentMethod.jpeg';
import termRadio from '../../assets/general/radioBtn.jpeg';
import radioBtn from '../../assets/paymentMethod/radioBtn.png';
import miniForward from '../../assets/paymentMethod/miniForward.png';
import {
  CreateAccountWrapper,
  CreateAccountContent,
  CreateAccountHeading,
  InputWrapper,
  FirstNameInput,
  InputIcon,
  LastNameInput,
  EmailInput,
  PhoneInput,
  SaveButton,
  ExitButton,
  Legend,
  PaymentOptions,
  Option,
  ForwardIcon,
  RadioButton,
  TermsAndServicesRow,
  TermRadioBtn,
  AgreeOurText,
  TermsOfServicesText,
  Note,
  Wrapper
} from './StyledComponents';

const CreateAccount = ({navigation}) => {
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <Wrapper>
    <CreateAccountWrapper
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      showsVerticalScrollIndicator={false}
      >
      <ExitButton onPress={()=>navigation.goBack()} >
      <Image source={skipIcon} />
      </ExitButton>

      <CreateAccountContent behavior="padding">
        <CreateAccountHeading>Create Your Free {"\n"} Account</CreateAccountHeading>
        <Note>You’ll recieve notifications and updates</Note>
        <InputWrapper>
          {firstNameFocus && <Legend widthValue='70px' >First Name</Legend>}

          <FirstNameInput
            placeholder="First name"
            onFocus={() => setFirstNameFocus(true)}
            onBlur={() => setFirstNameFocus(false)}
            isFocused={firstNameFocus}
          />
          <InputIcon source={userIcon} />
        </InputWrapper>

        <InputWrapper>
          {lastNameFocus && <Legend widthValue='70px' >Last Name</Legend>}
          <LastNameInput
            placeholder="Last name"
            onFocus={() => setLastNameFocus(true)}
            onBlur={() => setLastNameFocus(false)}
            isFocused={lastNameFocus}
          />
          <InputIcon source={userIcon} />
        </InputWrapper>

        <InputWrapper>
          {phoneFocus && <Legend widthValue='40px' >Phone</Legend>}
          <PhoneInput
            placeholder="Phone no."
            onFocus={() => setPhoneFocus(true)}
            onBlur={() => setPhoneFocus(false)}
            isFocused={phoneFocus}
          />
          <InputIcon source={phoneIcon} />
        </InputWrapper>

        <InputWrapper>
          {emailFocus && <Legend widthValue='40px' >Email</Legend>}
          <EmailInput
            placeholder="Email address"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            isFocused={emailFocus}
          />
          <InputIcon source={emailIcon} />
        </InputWrapper>

        <InputWrapper>
          {passwordFocus && <Legend widthValue='40px' >Email</Legend>}
          <EmailInput
            placeholder="Password"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            isFocused={passwordFocus}
          />
          <InputIcon source={emailIcon} />
        </InputWrapper>

        <Image  source={paymentMethod} style={{
          marginTop:5,
          // marginBottom:40,
          position: 'relative',
          right: 15,
        }} />

        <PaymentOptions>
          <RadioButton source={radioBtn} />
          <Option>Online Payment</Option>
          <ForwardIcon source={miniForward} />
        </PaymentOptions>

        <TermsAndServicesRow>
          <TermRadioBtn source={termRadio} />
          <AgreeOurText> Agree our</AgreeOurText>
          <TermsOfServicesText>Terms of Service</TermsOfServicesText>
        </TermsAndServicesRow>


        <SaveButton>GET SNAG'N</SaveButton>

      </CreateAccountContent>
    </CreateAccountWrapper>
    </Wrapper>
  );
};

export default CreateAccount;
