import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';
import emailIcon from '../../assets/editProfile/email.png';
import {
  SignInWrapper,
  SignInContent,
  SignInHeading,
  InputWrapper,
  InputIcon,
  EmailInput,
  SaveButton,
  Legend,
  Wrapper,
  LastRow,
  RandomText,
  SignUpLink
} from './StyledComponents';

const SignIn = ({navigation}) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <Wrapper>
    <SignInWrapper
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      showsVerticalScrollIndicator={false}
      >

      <SignInContent behavior="padding">
        <SignInHeading>Sign In</SignInHeading>
        


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
          {passwordFocus && <Legend widthValue='70px' >Password</Legend>}
          <EmailInput
            placeholder="Password"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            isFocused={passwordFocus}
          />
          <InputIcon source={emailIcon} />
        </InputWrapper>

        <TouchableOpacity onPress={()=>alert("sign in!")}>
        <SaveButton>GET SNAG'N</SaveButton>
        </TouchableOpacity>
        <LastRow>
          <RandomText>
          Don't have an account? 

          </RandomText>
          <TouchableOpacity onPress={()=>navigation.navigate('CreateAccount')} >
          <SignUpLink> Get New!</SignUpLink>
          </TouchableOpacity>
        </LastRow>
      </SignInContent>
    </SignInWrapper>
    </Wrapper>
  );
};

export default SignIn;
