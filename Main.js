import  'react-native-gesture-handler' ;
enableScreens ();

import  React, { useEffect }  from  'react' ;
import  { enableScreens }  from  'react-native-screens' ;
import Navigation from './src/Navigations/NavigationContainer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsByCategory } from './src/redux/actionCreators'

export default Main = () => {

  const dispatch = useDispatch()

  const prodFetch = async (cat) => {
    await dispatch(fetchProductsByCategory(cat))
    .then(res=>console.log("res of productfetching function from reducer ",cat,res))
    .catch(err=>console.log("err of productfetching function from reducer ",err))
  }

  useEffect(()=>{
    prodFetch("TopSeller")
    prodFetch("New")
    prodFetch("Nicotine")
    prodFetch("Drink")
    prodFetch("Food")
    prodFetch("Snacks")
    prodFetch("Candy")
  },[])
  console.log("+++++")
  return (
    <Navigation  />
  );
};
