import React from 'react'
import { BottomSearchView, BottomSearchInput, LeftIconInInput, RightIconInInput } from './StyledComponent'
import searchIcon from '../../assets/bottomSearch/search.png'
import sendIcon from '../../assets/bottomSearch/send.png'

const BottomSearch = () => {
  return (
    <BottomSearchView>
      <LeftIconInInput source={searchIcon} />
      <BottomSearchInput 
        placeholder="'Don't see what you want? Let us know.'" 
        placeholderStyle={{
          color: '#A8A8A8',
          fontSize: '12px'
        }}
      />
      <RightIconInInput source={sendIcon} />
    </BottomSearchView>
  )
}

export default BottomSearch