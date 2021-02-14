import styled from 'styled-components'

export const Wrapper = styled.View`
  width: 100%;
  height:100%;
  background-color: ${props => props.color};
  color: #000;
  justify-content: space-around;
  align-items: center;
  paddingBottom: 70px;
`

export const OrderStatusHeading = styled.Text`
font-family: MazzardH-Regular;
font-style: normal;
font-weight: 600;
font-size: 30px;
text-transform: capitalize;
color: #FFFFFF;
`

export const OrderStatus = styled.Text`
font-family: MazzardH-Regular;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: capitalize;
color: #FFFFFF;
`

export const TimeLeft = styled.Text`
font-family: MazzardH-Light;
font-style: normal;
font-size: 83px;
line-height: 98px;
text-align: center;
color: #FFFFFF;
`

export const GoToHomeButton = styled.Text`
width: 267px;
height: 45px;
text-align: center;
padding-top: 10px;
background: #FFFFFF;
border: 1px solid #EFEFEF;
box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.06);
border-radius: 120px;
`