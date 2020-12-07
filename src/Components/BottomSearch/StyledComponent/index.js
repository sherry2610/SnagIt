import styled from 'styled-components'


export const BottomSearchView = styled.View`
  flex-direction: row;
  width: 100%;
  height: 63px;
  background-color: #1E201D;
  padding: 12px 16px;
  margin-top: 20px;
`

export const BottomSearchInput = styled.TextInput`
  width: 380px;
  height: 39px;
  border-radius: 59px;
  padding: 12px 29px;
  background-color: white;
`

export const LeftIconInInput = styled.Image`
  position: absolute;
  left: 26px;
  top: 23px;
  z-index: 10;
`

export const RightIconInInput = styled.Image`
  position: absolute;
  right: 24px;
  top: 23px;
  z-index: 10;
`