import React from 'react';
import {
  Wrapper,
  InputWrapper,
  InputLeftIcon,
  InputRightIcon,
  SearchInput,
  NothingFoundImage,
  ResultItem
} from './StyledComponents'
import BottomSearch from '../../Components/BottomSearch'
import searchIcon from '../../assets/search/search.png'
import backIcon from '../../assets/search/back.png'
import nothingFoundImage from '../../assets/search/nothingFound.png'
import { useEffect, useState } from 'react/cjs/react.development';
import { useSelector } from 'react-redux';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
const Search = ({navigation}) => {
  const [searchText,setSearchText] = useState('')
  
  const {allProducts} = useSelector(state=> state.productReducer)
  const [searchResults,setSearchResults] = useState(searchText.length ? allProducts.filter(prod=>prod.name.toLowerCase().includes(searchText.toLowerCase())) : [] )


  useEffect(()=>{
    setSearchResults(searchText.length ? allProducts.filter(prod=>prod.name.toLowerCase().includes(searchText.toLowerCase())) : [])
  },[searchText])

  console.log("in search screen",{searchText,searchResults,allProducts,expected:searchText.length ?allProducts.filter(prod=>prod.name.toLowerCase().includes(searchText.toLowerCase())): []})
  return (
    <>
    <Wrapper behavior='padding' >
      <InputWrapper>
        
        <SearchInput 
          placeholder="search"
          onChangeText={text=>setSearchText(text)} 
          />
        <InputLeftIcon source={backIcon} />
        <InputRightIcon source={searchIcon} />
      </InputWrapper>

      <ScrollView>
      {
        searchText.length && 
          searchResults.length ? 
          searchResults.map(prod=>
            <ResultItem onPress={()=>{navigation.navigate('ProductInformation',{
              mode:'prodInfo',
              prodInfo: prod
              })}} >
            <Text style={{width:350,height:50,borderBottomColor:'black', borderBottomWidth:1, marginBottom:10, paddingLeft:20, paddingTop:15}}>{prod.name}</Text>
            </ResultItem>
            ) : 
          <NothingFoundImage source={nothingFoundImage} />
      }
      </ScrollView>
      
      <BottomSearch />  
    </Wrapper>
    
    </>
  );
};

export default Search;