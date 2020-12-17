const baseUrl = 'http://10.0.2.2:3000';

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
