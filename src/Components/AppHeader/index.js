import React from 'react'
import { AppHeaderWrapper, Hamburger, MainLogo, Search, CartWithItems } from './StyledComponents'
import searchIcon from '../../assets/appHeader/search.png'
import hamburger from '../../assets/appHeader/hamburger.png'
import cartWithTwoItems from '../../assets/appHeader/cartWithTwoItems.png'
import mainLogo from '../../assets/general/mainLogo.png'
import { Image } from 'react-native'
import { DrawerActions } from '@react-navigation/native';

export default AppHeader = ({ navDispatch }) => {

  return (
  <AppHeaderWrapper>
    <Hamburger source={hamburger} />
    <MainLogo source={mainLogo} />
    <Search source={searchIcon} />
    <CartWithItems onPress={()=>navDispatch(DrawerActions.openDrawer())}>
    <Image source={cartWithTwoItems} />
    </CartWithItems>
  </AppHeaderWrapper>
  )
}