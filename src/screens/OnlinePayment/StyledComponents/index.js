import styled from 'styled-components'

export const Wrapper = styled.View`
  width: 363px;
  margin: 30px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  left: 0px;
`

export const WrapperContent = styled.View`
  width: 100%;
  position: relative;
  top: 112px;
`

export const MainHeading = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  line-height: 32px;
  text-transform: capitalize;
  margin-bottom: 46px;
  color: #1E201D;
`

export const CardContent = styled.View`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #ECECEC;
`

export const CardImage = styled.Image`
  margin-right: 20px;
`

export const TickIcon = styled.Image`
  position: absolute;
  right: 0px;
  top: 23px;
`

export const CardNumber = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #545454
  margin-top: 3px;
`

export const AddCard = styled.View`
  width: 100%;
  margin-top: 25px;
  flex-direction: row;
`

export const AddCardText = styled.Text`
  font-family: Mazzard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #545454;
`

export const AddCardImage = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
`