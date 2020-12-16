import React, {useState} from 'react';
import { Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
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
import api from '../../utils/apiUtils/api'
import { validateEmail } from '../../utils/helperUtils/generalUtils'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
}

const CreateAccount = ({navigation}) => {
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [formData, setFormData] = useState(initialState)

  const handleSubmit = async () => {
    
    const { email, password, firstName, lastName, phone } = formData
    
    if(!email || !password || !firstName || !lastName || !phone){
      alert("All fields are required")
      return
    }

    if(!validateEmail(email)) return

    if(password.length < 4) {
      alert("Password should be atleast of 4 digits")
      return
    }

    console.log("state ",{...formData,username:email})

    const payload = {
      email,
      username: email,
      firstname: firstName,
      lastname: lastName,
      phone_num: phone,
      password,
  }

  api.signUpApi(payload)
  .then(data => {
    console.log("res ------",data); // JSON data parsed by `data.json()` call
    if(data.success){
      console.log("user registered!!!",data.user)
      AsyncStorage.setItem("userData",JSON.stringify(data.user))
      navigation.navigate('HomeScreen')
      alert("Registration Successfull")
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
          <Legend widthValue='70px' display={firstNameFocus} >First Name</Legend>

          <FirstNameInput
            placeholder="First name"
            onChangeText={text=>setFormData({...formData,'firstName':text})}
            onFocus={() => setFirstNameFocus(true)}
            onBlur={() => setFirstNameFocus(false)}
            isFocused={firstNameFocus}
          />
          <InputIcon source={userIcon} bottom={20} />
        </InputWrapper>

        <InputWrapper>
          <Legend widthValue='70px' display={lastNameFocus} >Last Name</Legend>
          <LastNameInput
            placeholder="Last name"
            onChangeText={text=>setFormData({...formData,'lastName':text})}
            onFocus={() => setLastNameFocus(true)}
            onBlur={() => setLastNameFocus(false)}
            isFocused={lastNameFocus}
          />
          <InputIcon source={userIcon} bottom={20} />
        </InputWrapper>

        <InputWrapper>
          <Legend widthValue='40px' display={phoneFocus} >Phone</Legend>
          <PhoneInput
            placeholder="Phone no."
            keyboardType = 'numeric'
            onChangeText={text=>setFormData({...formData,'phone':text})}
            onFocus={() => setPhoneFocus(true)}
            onBlur={() => setPhoneFocus(false)}
            isFocused={phoneFocus}
          />
          <InputIcon source={phoneIcon} bottom={29} />
        </InputWrapper>

        <InputWrapper>
          <Legend widthValue='40px' display={emailFocus} >Email</Legend>
          <EmailInput
            placeholder="Email address"
            onChangeText={text=>setFormData({...formData,'email':text})}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            isFocused={emailFocus}
          />
          <InputIcon source={emailIcon} bottom={30} />
        </InputWrapper>

        <InputWrapper>
          <Legend widthValue='70px' display={passwordFocus} >Password</Legend>
          <EmailInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text=>setFormData({...formData,'password':text})}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            isFocused={passwordFocus}
          />
          <InputIcon source={emailIcon} bottom={29} />
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

        <TouchableOpacity onPress={()=>handleSubmit()} >
        <SaveButton>GET SNAG'N</SaveButton>
        </TouchableOpacity>

      </CreateAccountContent>
    </CreateAccountWrapper>
    </Wrapper>
  );
};

export default CreateAccount;
