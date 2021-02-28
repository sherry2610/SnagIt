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
  margin: 0px auto;
  margin-bottom: 15px;
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
  font-family: MazzardH-Bold;
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
  margin: 0px 0px 0px 18px;
`

export const ProductContainer = styled.View`
  position: relative;
  
  flex: 0 46%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  background: #FFFFFF;
  margin: 10px 10px 0px 0px;
  elevation: 5;
  border-radius: 24px;
  
`

export const ProductInfoIcon = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10;
`

export const ProductImage = styled.Image`


  
`

export const ProductTitle = styled.Text`
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #545454;
  margin: 0px 0px 0px 17px
`
export const FromText = styled.Text`
  font-family: MazzardH-Regular;
  font-style: normal;
  font-size: 12px;
  margin: 2px 0px 0px 17px;
  width: 40px;
`

export const ProductPrice = styled.Text`
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #EDA920;
`