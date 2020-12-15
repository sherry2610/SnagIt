import  React  from  'react' ;
import  { createStackNavigator }  from  '@react-navigation/stack' ;

import  Home  from  '../screens/Home' ;
import  AboutUs  from  '../screens/AboutUs' ;
import  ContactUs  from  '../screens/ContactUs' ;
import  TermsOfServices  from  '../screens/TermsOfServices' ;
import  Settings  from  '../screens/Settings' ;
// import  Users  from  '../screens/Users' ;

const  Stack  =  createStackNavigator() ;

export  default  ( { navigation } )  =>  {
  return  (
    <Stack.Navigator>
      <Stack.Screen  
        name="Home"
        component={ Home } 
        options={{headerShown: false}}
        />
      <Stack.Screen  
        name="AboutUs"
        component={ AboutUs } 
        options={{headerShown: false}}
        />
        <Stack.Screen  
        name="ContactUs"
        component={ ContactUs } 
        options={{headerShown: false}}
        />
        <Stack.Screen  
        name="Settings"
        component={ Settings } 
        options={{headerShown: false}}
        />
        <Stack.Screen  
        name="TermsOfServices"
        component={ TermsOfServices } 
        options={{headerShown: false}}
        />
      {/* <Stack.Screen  name = "UsersScreen"  component = { Users } /> */}
    </Stack.Navigator>
  ) ;
} ;