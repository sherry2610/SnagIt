import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import emailIcon from '../../assets/editProfile/email.png';
// import api from '../../utils/apiUtils/api';
import { SignInRequest, getCartRequest, editCartRequest } from '../../redux/actionCreators'
import {useDispatch, useSelector} from 'react-redux';
import { validateEmail } from '../../utils/helperUtils/generalUtils';
import SignInFirst from '../../Components/SignInFirst' 
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

const SignIn = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {allProducts} = useSelector(state=> state.productReducer)
  const {cart} = useSelector(state=> state.cartReducer)
  const [isLoading, setIsLoading] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isComingFromProfile = route.params ? route.params.fromProfileScreen : false
console.log("checking allProducts in signin", allProducts)
  const handleSubmit = async () => {
    setIsLoading(true)
    if(!email || !password ){
      setIsLoading(false)
      alert("All fields are required")
      return
    }

    if(!validateEmail(email)) {
      setIsLoading(false)
      alert("Email is not valid")
      return
    }

    const pay = {
      username: email,
      password,
  }

  dispatch(SignInRequest(pay)).then( async (res)=>{
    if (!res.payload.signInFailed){
        dispatch(getCartRequest({
          allProducts,
          token: res.payload.token
        }))
        console.log("just above",cart,res.payload.token)
        await dispatch(editCartRequest({
        payload: {
          "lst": cart
          },
          token: res.payload.token
        })).then(resp=>{
            console.log("res++++++",resp)
        })

        if(isComingFromProfile){
          navigation.navigate('Profile')
        }else{
          navigation.navigate('HomeScreen')
        }

      setIsLoading(false)
    }
    else{
      if (res.payload.err){
        if (res.payload.err.name === "IncorrectUsernameError"){
            alert("Email is incorrect!");
            setIsLoading(false)
        }
        else if (res.payload.err.name === "IncorrectPasswordError"){
            alert("Incorrect Password");
            setIsLoading(false)
        } 
    }
    else{
        alert("Ops! Login Failed");
        setIsLoading(false)
    }
    }
  })

  // api.signInApi(payload)
  // .then(data => {
  //   console.log("res ------",data); // JSON data parsed by `data.json()` call
  //   if(data.success){
  //     setEmail('')
  //     setPassword('')
  //     console.log("user registered!!!",data.user)
  //     AsyncStorage.setItem("userData",JSON.stringify(data.user))
  //     navigation.navigate('HomeScreen')
  //     alert("Login Successfull")
  //   } else {
  //     if(data.err){
  //       alert(data.err.message)
  //     }
  //   }
  // })
  // .catch(err=>{
  //   console.log("error in signup ------", err)
  //   alert("Something went wrong")
  // })

  }

  // console.log("isComingFromProfile",isComingFromProfile, route.params)

  return (
    <Wrapper>
    <SignInWrapper
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      showsVerticalScrollIndicator={false}
      >
        {/* {isComingFromProfile && <SignInFirst />} */}
        

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

        {isLoading ? 
          <ActivityIndicator size="large" color="red" /> :
          <TouchableOpacity onPress={()=>handleSubmit()}>
          <SaveButton>GET SNAG'N</SaveButton>
          </TouchableOpacity>
        }
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
