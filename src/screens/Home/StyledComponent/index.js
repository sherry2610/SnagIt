import styled from 'styled-components'

export const HomeWrapper = styled.View`
  flex: 1;
`


export const CategoryWidgetRow = styled.ScrollView`
  flex-direction: row;
  height: 0px;
  margin-top: -90px;
  margin-bottom: -90px;
`

export const CategoryWidgetContainer = styled.TouchableOpacity`

  margin: 0px 14px;
  align-items: center;
`

export const Badge = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background: ${props=>props.bg};
  justify-content: center;
  align-items: center;
`

export const WidgetTitle = styled.Text`
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #1E201D;
`
