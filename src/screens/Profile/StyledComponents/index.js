import styled from 'styled-components'

export const ProfileContent = styled.View`
  width:  343px;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin: 10px auto;
`

export const ProfileImageWrapper = styled.View`
  position: relative;
  height: 140px;
`


export const ProfileImage = styled.Image`

`

export const EditIcon = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;

`

export const AddIcon = styled.Image`
  position: absolute;
  bottom: 2px;
  left: 73px;
`

export const ProfileName = styled.Text`
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 28px;
  margin-bottom: 9px;
  text-transform: capitalize;
  color: #1E201D;
`

export const ProfileContactDetail = styled.View`
  height: 45px;
  
`

export const ProfileEmail = styled.Text`
  height: 21px;
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  color: #545454;
`

export const ProfileContact = styled.Text`
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px; 
  margin-left: 24px;
  margin-bottom: 24px;
  color: #545454;
`

export const OtherOptions = styled.View`
width: 100%;
`

export const ChangePassword = styled.Text`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #ECECEC;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 10px;
  padding: 24px 0px 15px;

  text-align: center;

  color: #EDA920;
`

export const PastRecentOrders = styled.Text`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #ECECEC;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 10px;
  padding: 24px 0px 15px;

  text-align: center;

  color: #EDA920;
`

export const PaymentMethod = styled.Text`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #ECECEC;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 10px;
  padding: 24px 0px 15px;
  text-align: center;

  color: #EDA920;
`

export const Logout = styled.Text`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #ECECEC;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 10px;
  padding: 24px 0px 15px;

  text-align: center;

  color: #EDA920;
`
