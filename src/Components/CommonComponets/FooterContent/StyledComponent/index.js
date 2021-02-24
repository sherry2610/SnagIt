import styled from 'styled-components'

export const Footer = styled.View`
  position: absolute;
  width: 100%;
  height: 48px;
  bottom: 0px;
  background: ${props => props.bgColor ? props.bgColor : '#FFF'};
`

export const FooterContent = styled.View`
  position: absolute;
  left: 46.67%;
  right: 46.4%;
  top: 41.67%;
  bottom: 41.67%;
  width:26px;
  height:8px;
  background: #1E201D;
  border-radius: 11px;

`