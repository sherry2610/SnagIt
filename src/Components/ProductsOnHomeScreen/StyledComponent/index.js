import styled from 'styled-components'
import { Dimensions } from 'react-native'

const winWidth = Dimensions.get('window').width

export const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  margin-bottom: 50px;
`

export const CategoryWidget = styled.Image`
  width: ${winWidth}px;
  height: 86px;
  margin: 25px 0px 10px 0px;
`

export const CategoryWidgetSeparator = styled.View`  
  width: ${winWidth-32}px;
  margin: 15px auto;
  border: 1px solid #E9E9E9;
`
export const ProductsDisplay = styled.View`
  position: relative;
  width: ${winWidth-32}px;
  margin: 0px auto;
`

export const ProductsCategory = styled.Text`
  paddingTop: 15px;
  height: 39px;
  font-family: Mazzard;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 24px;

  text-transform: capitalize;

  color: #1E201D;
`
export const ProductsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ProductContainer = styled.View`
  position: relative;
  flex: 0 46%;
  height: 190px;
  width: 100%;
  background: #FFFFFF;
  margin: 10px 10px 0px 0px;
  border: 5px solid #EFEFEF;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.06);
  border-radius: 24px;
`

export const ProductInfoIcon = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10;
`

export const ProductImage = styled.Image`
  margin: 18px 29px 0px 19px;
  width: 106px;
  height: 106px;
`

export const ProductTitle = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #545454;
  margin: 5px 0px 5px 17px
`

export const ProductPrice = styled.Image`
  margin: 0px 0px 0px 17px;
  width: 82px;
  height: 14px;
`