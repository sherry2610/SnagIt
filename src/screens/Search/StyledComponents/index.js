import styled from 'styled-components'
import { Dimensions } from 'react-native'

const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: ${winHeight - 25}px;
  margin: 0px auto;

`

export const InputWrapper = styled.View`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 10px;
  padding-horizontal: 10px;
`


export const SearchInput = styled.TextInput`
  width: ${winWidth - 32}px;
  height: 53px;
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  padding-left: 63px;
  margin: 0px auto;
`


export const InputLeftIcon = styled.Image`
  position: absolute;
  bottom: 5px;
  left: 20px;
`

export const InputRightIcon = styled.Image`
  position: absolute;
  bottom: 17px;
  right: 30px;
`

export const NothingFoundImage = styled.Image`
  width: ${winWidth - 32}px;
  position: relative;
  top: 129px;
  height: 200px;
  margin-bottom: 250px;
`