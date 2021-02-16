import AsyncStorage from "@react-native-community/async-storage";

const baseUrl = 'https://snagit-server.herokuapp.com';

export default {
  signUpApi,
  signInApi,
  getAllProducts,
  getProductsByCategory,
  getCart,
  editCart,
  addCard,
  generateTokenForCard,
  getUserUpdatedRecord,
  placeOrder,
  placeOrderWithPaypal,
  getOrderHistory
}

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token
}

async function signUpApi (payload) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(payload),
    redirect: 'follow',
    mode: 'no-cors'
  };

  const response = await fetch(`${baseUrl}/users/signup`, requestOptions)

  return response.json()
}

async function signInApi (payload) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
      body: JSON.stringify(payload),
    redirect: 'follow',
    mode: 'no-cors'
  };

  const response = await fetch(`${baseUrl}/users/login`, requestOptions)

  return response.json()
}

async function getUserUpdatedRecord (token) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    mode: 'no-cors'
  };

  const response = await fetch(`${baseUrl}/users/getuser`, requestOptions)

  return response.json()
}


async function getAllProducts () {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    mode: 'no-cors'
  };

  const response = await fetch(`${baseUrl}/products`, requestOptions)

  return response.json()
}

async function getProductsByCategory (cat) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    mode: 'no-cors'
  };

  const response = await fetch(`${baseUrl}/products/category/${cat}`, requestOptions)

  return response.json()
}

async function getCart (token) {
  // var token = getToken();
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    mode: 'no-cors'
  };

  const response = await fetch(`${baseUrl}/carts`, requestOptions)

  return response.json()
}

async function editCart (payload,token) {
  // var token = getToken();
  console.log("inside",token,payload)
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: JSON.stringify(payload),
    redirect: 'follow',
    mode: 'no-cors'
  };

  const response = await fetch(`${baseUrl}/carts/editcart/`, requestOptions)

  return response.json()
}

async function addCard (payload,token) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(payload),
    redirect: 'follow',
    mode: 'no-cors'
  };

  const response = await fetch(`${baseUrl}/users/add-card/`, requestOptions)

  return response.json()
}

async function generateTokenForCard ({cardNumber,CVV,expiryMonth,expiryYear}) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer pk_test_51IDRhaIdmUDlgC55AA04mjrDlFzi81KJTM3Lk5dJRIeg3y6J68BldfdBZxIzK7BWaBeSMuw0jEoiQlGmLalyOmGj00NoZtKwHo");
  
  var urlencoded = new URLSearchParams();
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  let response;
  
  await fetch(`https://api.stripe.com/v1/tokens?card[number]=${cardNumber}&card[exp_month]=${expiryMonth}&card[exp_year]=${expiryYear}&card[cvc]=${CVV}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log("result from stripe api",result)
      response = result
    })
    .catch(error => console.log('error', error));

    return response;
}

async function placeOrder(payload, token){

  var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(payload);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};



let result = await fetch(`${baseUrl}/orders`, requestOptions);


  return result.json()

}


async function placeOrderWithPaypal(token){

  var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};



let result = await fetch(`${baseUrl}/orders/without-charge`, requestOptions);


  return result.json()

}

async function getOrderHistory(token){

  var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  mode: 'no-cors'
};


let result = await fetch(`${baseUrl}/orders`, requestOptions);


  return result.json()

}