import React, { useEffect, useState } from 'react';
import {Dimensions, View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import profilePic from '../../assets/profile/profilepic.png';
import editIcon from '../../assets/profile/edit.png';
import addProfilePic from '../../assets/profile/addprofilepic.png';
import {
  ProfileContent,
  ProfileImage,
  ProfileImageWrapper,
  AddIcon,
  EditIcon,
  ProfileName,
  ProfileContactDetail,
  ProfileEmail,
  ProfileContact,
  OtherOptions,
  ChangePassword,
  PastRecentOrders,
  PaymentMethod,
  Logout
} from './StyledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { setComingForCheckout, signOut } from '../../redux/actionCreators'

const height = Dimensions.get('window').height;

const Profile = (props) => {

  const dispatch = useDispatch()
  const {authedUser} = useSelector(state=> state.authedUser)

  const [userProfile, setUserProfile] = useState(authedUser)

  const { navigation } = props


  useEffect(()=>{
    function fetchProfile() {
      const { user } = authedUser
      if(user){
        console.log("userData in profile",user)
        setUserProfile(user)
      }else{
        setUserProfile(false)
      }      
    }  
    fetchProfile();
  },[authedUser.token,authedUser])


  // fetchProfile();
  console.log("userProfile ------",userProfile,authedUser)

  const handleLogout = () => {
    dispatch(setComingForCheckout(false))
    dispatch(signOut())
  }

  console.log("loggedIn or not?",authedUser.token?true:false)

  if(authedUser.token){
  return (
    <ScrollView>
      <ProfileContent>
        <EditIcon  onPress={()=>navigation.navigate('EditProfile')}>
        <Image source={editIcon} />
        </EditIcon>
        <ProfileImageWrapper>
          <ProfileImage source={profilePic} />
          <AddIcon source={addProfilePic} />
        </ProfileImageWrapper>

        <ProfileName>
        {userProfile ? `${userProfile.firstname} ${userProfile.lastname}` : 'Jonathan Davis'}
        {/* {userProfile && `${userProfile.firstname} ${userProfile.lastname}`} */}
        </ProfileName>

        <ProfileContactDetail>
          <ProfileEmail>
            {userProfile ? userProfile.email : 'jonithan123@gmail.com'}
            {/* {userProfile && userProfile.email } */}
          </ProfileEmail>
          <ProfileContact>
            {userProfile ? userProfile.phone_num : '123-321-1234'}
            {/* {userProfile && userProfile.phone_num } */}
          </ProfileContact>
        </ProfileContactDetail>
        
        <OtherOptions>
          <ChangePassword onPress={()=>navigation.navigate('ChangePassword')}>
            Change Password
          </ChangePassword>
          <PastRecentOrders onPress={()=>navigation.navigate('PastOrders')} >
            Past/Recent Orders
          </PastRecentOrders>
          <PaymentMethod onPress={()=>navigation.navigate('PaymentMethod')} >
            Payment Method
          </PaymentMethod>
          
            <Logout onPress={handleLogout} >
              Logout
            </Logout>
          
        </OtherOptions>
      </ProfileContent>

    </ScrollView>
    );
  }else {
    props.navigation.navigate('SignIn',{
      fromProfileScreen:true
    })
    return <></>
  }
};

export default Profile;
