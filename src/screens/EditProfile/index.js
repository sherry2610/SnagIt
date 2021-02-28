import React, {useState} from 'react';
import { Image, TouchableOpacity } from 'react-native'
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
  Wrapper
} from './StyledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { validateEmail } from '../../utils/helperUtils/generalUtils';
import {setProfileData} from '../../redux/actionCreators'
import api from '../../utils/apiUtils/api'

const EditProfile = (props) => {
  const disptach = useDispatch()
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const {authedUser} = useSelector(state => state.authedUser)
  const [email,setEmail] = useState(authedUser.user.email)
  const [fName,setFName] = useState(authedUser.user.firstname)
  const [lName,setLName] = useState(authedUser.user.lastname)
  const [phone,setPhone] = useState(authedUser.user.phone_num)

  const onSubmit = async () => {
    if(!phone || !fName || !lName || !email){
      alert("all fields are required!")
      return
    }
    if(!validateEmail(email)){
      return
    }
    const payload = {
      firstname: fName,
      lastname: lName,
      email,
      phone_num: phone
    }
    await api.editProfile(payload, authedUser.token)
    .then(res=>{
      alert("profile edit sucessfully!")
      console.log("profile edit res",res)
      if(res.success){
        disptach(setProfileData(res))
      }
      props.navigation.navigate("Profile")
    })
    .catch(err=>{
      alert("profile edit unsuccessfull, Please try again!  ")
    })
  }

  const { navigation } = props
  return (
    <Wrapper>
    <EditProfileWrapper
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      showsVerticalScrollIndicator={false}
      >
      <ExitButton  onPress={()=>navigation.goBack()}>
      <Image source={skipIcon} />
      </ExitButton>

      <EditProfileContent behavior="padding">
        <EditProfileHeading>Edit Your Account</EditProfileHeading>
        <InputWrapper>
          {firstNameFocus && <Legend widthValue='70px' >First Name</Legend>}

          <FirstNameInput
            placeholder="Jonithan"
            value={fName}
            onFocus={() => setFirstNameFocus(true)}
            onBlur={() => setFirstNameFocus(false)}
            isFocused={firstNameFocus}
            onChangeText={(text)=>setFName(text)}
          />
          <InputIcon source={userIcon} />
        </InputWrapper>

        <InputWrapper>
          {lastNameFocus && <Legend widthValue='70px' >Last Name</Legend>}
          <LastNameInput
            placeholder="Davis"
            value={lName}
            onFocus={() => setLastNameFocus(true)}
            onBlur={() => setLastNameFocus(false)}
            isFocused={lastNameFocus}
            onChangeText={(text)=>setLName(text)}
          />
          <InputIcon source={userIcon} />
        </InputWrapper>

        <InputWrapper>
          {emailFocus && <Legend widthValue='40px' >Email</Legend>}
          <EmailInput
            placeholder="jonithan123@gmail.com"
            value={email}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            isFocused={emailFocus}
            onChangeText={(text)=>setEmail(text)}
          />
          <InputIcon source={emailIcon} />
        </InputWrapper>

        <InputWrapper>
          {phoneFocus && <Legend widthValue='40px' >Phone</Legend>}
          <PhoneInput
            placeholder="123-321-1234"
            value={phone}
            onFocus={() => setPhoneFocus(true)}
            onBlur={() => setPhoneFocus(false)}
            isFocused={phoneFocus}
            onChangeText={(text)=>setPhone(text)}
          />
          <InputIcon source={phoneIcon} />
        </InputWrapper>
        <TouchableOpacity onPress={()=>onSubmit()}>
        <SaveButton>Save</SaveButton>
        </TouchableOpacity>

      </EditProfileContent>
    </EditProfileWrapper>
    </Wrapper>
  );
};

export default EditProfile;
