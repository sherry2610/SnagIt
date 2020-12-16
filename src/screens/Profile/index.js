import React from 'react';
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

const height = Dimensions.get('window').height;

const Profile = (props) => {
  const { navigation } = props

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
        Jonithan Davis
        </ProfileName>

        <ProfileContactDetail>
          <ProfileEmail>
            jonithan123@gmail.com
          </ProfileEmail>
          <ProfileContact>
            123-321-1234
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
          
            <Logout onPress={()=>navigation.navigate('CreateAccount')} >
              Logout
            </Logout>
          
        </OtherOptions>
      </ProfileContent>

    </ScrollView>
  );
};

export default Profile;
