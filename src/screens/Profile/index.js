import React, { useEffect, useState } from 'react';
import {Dimensions, View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import profilePic from '../../assets/profile/profilepic.png';
import editIcon from '../../assets/profile/edit.png';
import addProfilePic from '../../assets/profile/addprofilepic.png';
import AsyncStorage from '@react-native-community/async-storage'
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

const height = Dimensions.get('window').height;

const Profile = (props) => {

  const [userProfile, setUserProfile] = useState(false)

  const { navigation } = props


  useEffect(()=>{
    async function fetchProfile() {
      const userData = await AsyncStorage.getItem('userData')
      if(userData !== null){
        console.log("userData",JSON.parse(userData))
        setUserProfile(JSON.parse(userData))
      }else{
        setUserProfile(false)
      }      
    }  
    fetchProfile();
  },[])


  // fetchProfile();
  console.log("userProfile ------",userProfile)


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
          
            <Logout onPress={()=>{
              navigation.navigate('SignIn')
              AsyncStorage.clear()
              }} >
              Logout
            </Logout>
          
        </OtherOptions>
      </ProfileContent>

    </ScrollView>
  );
};

export default Profile;
