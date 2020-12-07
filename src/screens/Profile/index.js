import React from 'react';
import {Dimensions, View, Image, Text, ScrollView} from 'react-native';
import AppHeader from '../../Components/AppHeader';
import bottomTabNavigation from '../../assets/general/dummyBottomNavigation.png';
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
  return (
    <ScrollView>
      <AppHeader />
      <ProfileContent>
        <EditIcon source={editIcon} />
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
          <ChangePassword>
            Change Password
          </ChangePassword>
          <PastRecentOrders>
            Past/Recent Orders
          </PastRecentOrders>
          <PaymentMethod>
            Payment Method
          </PaymentMethod>
          <Logout>
            Logout
          </Logout> 
        </OtherOptions>

      </ProfileContent>
      <Image
        source={bottomTabNavigation}
        style={{
          marginBottom:55,
          width: "100%",
        }}
        
      />
    </ScrollView>
  );
};

export default Profile;
