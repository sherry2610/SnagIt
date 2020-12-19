import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import MainStack from './MainStack';
import skip from '../assets/general/skip.png';
import topSellerIcon from '../assets/Menu/topseller.png';
import aboutIcon from '../assets/Menu/about.png';
import candyIcon from '../assets/Menu/candy.png';
import contactIcon from '../assets/Menu/contact.png';
import drinksIcon from '../assets/Menu/drinks.png';
import foodIcon from '../assets/Menu/food.png';
import newIcon from '../assets/Menu/new.png';
import orderStatusIcon from '../assets/Menu/orderstatus.png';
import pastOrdersIcon from '../assets/Menu/pastorders.png';
import settingIcon from '../assets/Menu/setting.png';
import ToSIcon from '../assets/Menu/ToS.png';
import snacksIcon from '../assets/Menu/snacks.png';
import {
  Wrapper,
  SkipButton,
  Header,
  Heading,
} from './StyledComponents/LeftDrawer';


const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerComp {...props} />}>
      <Drawer.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  );
};

export const CustomDrawerComp = (props) => {
  const {navigation} = props;

  return (
    <DrawerContentScrollView {...props}>
        <Wrapper>
        <Header>
          <Heading>Menu</Heading>
          <SkipButton onPress={()=>navigation.goBack()} >
          <Image source={skip} />
          </SkipButton>
        </Header>

        <DrawerItem
          label="Top Sellers"
          style={{
            width: 220,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
            fontFamily: 'MazzardH-Regular',
          }}
          labelStyle={{
            marginLeft: -10,
          }}
          icon={({focused, color, size}) => (
            <Image
              source={topSellerIcon}
              style={{height: size, width: size}}
              resizeMode="contain"
            />
          )}
          onPress={() => navigation.navigate('Home')}
        />

<DrawerItem
          label="New"
          style={{
            width: 220,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
            fontFamily: 'MazzardH-Regular',
          }}
          labelStyle={{
            marginLeft: -10,
          }}
          icon={({focused, color, size}) => (
            <Image
              source={newIcon}
              style={{height: size, width: size}}
              resizeMode="contain"
            />
          )}
          onPress={() => alert("navigation is not decided on this route!")}
        />

<DrawerItem
          label="Drinks"
          style={{
            width: 220,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
            fontFamily: 'MazzardH-Regular'
          }}
          labelStyle={{
            marginLeft: -10,
          }}
          icon={({focused, color, size}) => (
            <Image
              source={drinksIcon}
              style={{height: size, width: size}}
              resizeMode="contain"
            />
          )}
          onPress={() => alert("navigation is not decided on this route!")}
        />

<DrawerItem
          label="Food"
          style={{
            width: 220,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
            fontFamily: 'MazzardH-Regular',
          }}
          labelStyle={{
            marginLeft: -10,
          }}
          icon={({focused, color, size}) => (
            <Image
              source={foodIcon}
              style={{height: size, width: size}}
              resizeMode="contain"
            />
          )}
          onPress={() => alert("navigation is not decided on this route!")}
        />

<DrawerItem
          label="Snacks"
          style={{
            width: 220,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
            fontFamily: 'MazzardH-Regular',
          }}
          labelStyle={{
            marginLeft: -10,
          }}
          icon={({focused, color, size}) => (
            <Image
              source={snacksIcon}
              style={{height: size, width: size}}
              resizeMode="contain"
            />
          )}
          onPress={() => alert("navigation is not decided on this route!")}
        />

<DrawerItem
          label="Candy"
          style={{
            width: 220,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
            fontFamily: 'MazzardH-Regular',
          }}
          labelStyle={{
            marginLeft: -10,
          }}
          icon={({focused, color, size}) => (
            <Image
              source={candyIcon}
              style={{height: size, width: size}}
              resizeMode="contain"
            />
          )}
          onPress={() => alert("navigation is not decided on this route!")}
        />

<DrawerItem
          label="Past Orders"
          style={{
            width: 220,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
            fontFamily: 'MazzardH-Regular',
          }}
          labelStyle={{
            marginLeft: -10,
          }}
          icon={({focused, color, size}) => (
            <Image
              source={pastOrdersIcon}
              style={{height: size, width: size}}
              resizeMode="contain"
            />
          )}
          onPress={() => navigation.navigate('PastOrders')}
        />


        <DrawerItem
          label="Settings"
          style={{
            width: 220,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
            fontFamily: 'MazzardH-Regular',
          }}
          labelStyle={{
            marginLeft: -10,
          }}
          icon={({focused, color, size}) => (
            <Image
              source={settingIcon}
              style={{height: size, width: size}}
              resizeMode="contain"
            />
          )}
          onPress={() => navigation.navigate('Settings')}
        />

<DrawerItem
          label="Order Status"
          style={{
            width: 220,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
            fontFamily: 'MazzardH-Regular',
          }}
          labelStyle={{
            marginLeft: -10,
          }}
          icon={({focused, color, size}) => (
            <Image
              source={orderStatusIcon}
              style={{height: size, width: size}}
              resizeMode="contain"
            />
          )}
          onPress={() => alert("this screen is under maintainance! Sorry for the inconvenience")}
        />

        <DrawerItem
          label="Terms n Conditions"
          style={{
            width: 220,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
            fontFamily: 'MazzardH-Regular',
          }}
          labelStyle={{
            marginLeft: -10,
          }}
          icon={({focused, color, size}) => (
            <Image
              source={ToSIcon}
              style={{height: size, width: size}}
              resizeMode="contain"
            />
          )}
          onPress={() => navigation.navigate('TermsOfServices')}
        />

        <DrawerItem
          label="About"
          style={{
            width: 220,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
            fontFamily: 'MazzardH-Regular',
          }}
          labelStyle={{
            marginLeft: -10,
          }}
          icon={({focused, color, size}) => (
            <Image
              source={aboutIcon}
              style={{height: size, width: size}}
              resizeMode="contain"
            />
          )}
          onPress={() => navigation.navigate('AboutUs')}
        />

        <DrawerItem
          label="Contact Us"
          style={{
            width: 220,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
            fontFamily: 'MazzardH-Regular',
          }}
          labelStyle={{
            marginLeft: -10,
          }}
          icon={({focused, color, size}) => (
            <Image
              source={contactIcon}
              style={{height: size, width: size}}
              resizeMode="contain"
            />
          )}
          onPress={() => navigation.navigate('ContactUs')}
        />

      </Wrapper>
    </DrawerContentScrollView>
  );
};