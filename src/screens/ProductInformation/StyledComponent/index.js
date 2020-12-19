import styled from 'styled-components'
import { Dimensions } from 'react-native'

const winWidth = Dimensions.get('window').width



export const ProdInfoWrapper = styled.ScrollView`
  display:flex;
  width: ${winWidth - 32}px;
  margin: 0px auto;
  flex-direction:column;
  position:relative;
  
`

export const ProductNameSection = styled.View`
  width:100%;
  flex-direction:row;
  width: 173px;
  height: 24px;
  margin:10px 50px 50px 0px;
`
export const ProductName = styled.Text`
  width: 243px;
  height: 54px;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  text-transform: capitalize;
  color: #1E201D;
`
export const ProductImageSection = styled.View`
  margin:0px 0px 20px 0px;
  width: 270.56px;
  height: 269px;
`

export const ProductDescriptionSection = styled.View`
  width: 100%;  
`

export const DescriptionHeading = styled.Text`
text-align:center;
margin-bottom:9px;
font-family: MazzardH-Regular;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;

text-transform: capitalize;

color: #1E201D;  
`

export const DescriptionText = styled.Text`
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #545454;
`

export const ProductPriceSection = styled.View`
  margin:20px 0px 0px 0px;
  
`

export const FromText = styled.Text`
text-align:center;
margin-bottom:9px;
font-family: MazzardH-Regular;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;

text-transform: capitalize;

color: #1E201D;  
`

export const PriceText = styled.Text`
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 100;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #545454;
`