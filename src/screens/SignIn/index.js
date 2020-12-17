import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';
import emailIcon from '../../assets/editProfile/email.png';
import api from '../../utils/apiUtils/api';
import { validateEmail } from '../../utils/helperUtils/generalUtils';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {

    if(!email || !password ){
      alert("All fields are required")
      return
    }

    if(!validateEmail(email)) return

    const payload = {
      username: email,
      password,
  }

  api.signInApi(payload)
  .then(data => {
    console.log("res ------",data); // JSON data parsed by `data.json()` call
    if(data.success){
      setEmail('')
      setPassword('')
      console.log("user registered!!!",data.user)
      AsyncStorage.setItem("userData",JSON.stringify(data.user))
      navigation.navigate('HomeScreen')
      alert("Login Successfull")
    } else {
      if(data.err){
        alert(data.err.message)
      }
    }
  })
  .catch(err=>{
    console.log("error in signup ------", err)
    alert("Something went wrong")
  })

  }

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
            value={email}
            onChangeText={text=>setEmail(text)}
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
            secureTextEntry={true}
            value={password}
            onChangeText={text=>setPassword(text)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            isFocused={passwordFocus}
          />
          <InputIcon source={emailIcon} />
        </InputWrapper>

        <TouchableOpacity onPress={()=>handleSubmit()}>
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
