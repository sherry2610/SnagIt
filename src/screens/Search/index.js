import React from 'react';
import {
  Wrapper,
  InputWrapper,
  InputLeftIcon,
  InputRightIcon,
  SearchInput,
  NothingFoundImage
} from './StyledComponents'
import BottomSearch from '../../Components/BottomSearch'
import searchIcon from '../../assets/search/search.png'
import backIcon from '../../assets/search/back.png'
import nothingFoundImage from '../../assets/search/nothingFound.png'
const Search = () => {
  return (
    <>
    <Wrapper behavior='padding' >
      <InputWrapper>
        
        <SearchInput placeholder="search" />
        <InputLeftIcon source={backIcon} />
        <InputRightIcon source={searchIcon} />
      </InputWrapper>

      <NothingFoundImage source={nothingFoundImage} />
      <BottomSearch />  
    </Wrapper>
    
    </>
  );
};

export default Search;