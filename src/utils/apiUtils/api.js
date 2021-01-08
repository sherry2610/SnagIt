const baseUrl = 'https://snagit-server.herokuapp.com';

export default {
  signUpApi,
  signInApi
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