import styled from 'styled-components'

export const AppHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 78px;
  background: #D51E16;
  position: relative;
`

export const Hamburger = styled.TouchableOpacity`
  margin: 18px 15px;
`

export const MainLogo = styled.Image`
  width: 131px;
  height: 56px;
  position: absolute;
  left: 122px;
  top: 11px;
`

export const Search = styled.Image`
  position: absolute;
  right: 59px;
  top: 30px;
`

export const CartWithItems = styled.TouchableOpacity`
  position: relative;
  left: 287px;
  top: 18px;
`