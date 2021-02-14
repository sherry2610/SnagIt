import  'react-native-gesture-handler' ;
enableScreens ();

import  React, { useEffect, useState }  from  'react' ;
import  { enableScreens }  from  'react-native-screens' ;
import Navigation from './src/Navigations/NavigationContainer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsByCategory, fetchAllProducts, setMinutesForReducer, setSecondsForReducer, setOrderInPlace } from './src/redux/actionCreators'

export default Main = () => {

  const dispatch = useDispatch()

  const {authedUser} = useSelector(state=>state.authedUser)


  const { timeStampAtWhichOrderPlaced, isOrderInPlace, secondsInReducer, minutesInReducer } = useSelector(state => state.orderStatusReducer )

  const initialMinute = minutesInReducer,initialSeconds = secondsInReducer;
  const [ minutes, setMinutes ] = useState(initialMinute);
  const [seconds, setSeconds ] =  useState(initialSeconds);
  useEffect(()=>{
    if(authedUser.token && isOrderInPlace){
  let myInterval = setInterval(() => {
          if (seconds > 0) {
              setSeconds(seconds - 1);
              dispatch(setSecondsForReducer(seconds - 1))
          }
          if (seconds === 0) {
              if (minutes === 0) {
                  dispatch(setOrderInPlace(false))
                  clearInterval(myInterval)
                  
              } else {
                  setMinutes(minutes - 1);
                  dispatch(setMinutesForReducer(minutes - 1))
                  setSeconds(59);
                  dispatch(setSecondsForReducer(59))
              }
          }
          if(minutes === 0 && seconds === 0){
            console.log("finished!")
          }
            else{
              console.log({minutes,seconds})
            }
      }, 1000)
      return ()=> {
          clearInterval(myInterval);
        };
      }else{
        console.log("countdown not started yet!")
      }
  });

  const prodFetch = async (cat) => {
    await dispatch(fetchProductsByCategory(cat))
    .catch(err=>console.log("err of productfetching function from reducer ",err))
  }

  const allProducts = async () => {
    await dispatch(fetchAllProducts())
    .catch(err=>console.log("err of allproductfetching function ",err))
  }

  useEffect(()=>{
    allProducts()
    prodFetch("TopSeller")
    prodFetch("New")
    prodFetch("Nicotine")
    prodFetch("Drink")
    prodFetch("Food")
    prodFetch("Snacks")
    prodFetch("Candy")
  },[])
  console.log("order status reducer state",{minutesInReducer,secondsInReducer,timeStampAtWhichOrderPlaced,isOrderInPlace})
  return (
    <Navigation  />
  );
};
