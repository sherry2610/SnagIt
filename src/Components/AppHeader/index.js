import React from 'react'
import { AppHeaderWrapper, Hamburger, MainLogo, Search, CartWithItems } from './StyledComponents'
import searchIcon from '../../assets/appHeader/search.png'
import hamburger from '../../assets/appHeader/hamburger.png'
import cartWithTwoItems from '../../assets/appHeader/cartWithTwoItems.png'
import mainLogo from '../../assets/general/mainLogo.png'

export default AppHeader = () => {

  return (
  <AppHeaderWrapper>
    <Hamburger source={hamburger} />
    <MainLogo source={mainLogo} />
    <Search source={searchIcon} />
    <CartWithItems source={cartWithTwoItems} />
  </AppHeaderWrapper>
  )
}