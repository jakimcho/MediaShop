import axios from 'axios';
import { apiURL } from './backend';
import jwtDecode from 'jwt-decode';

const tokenKey = "token"

async function login(email, password){
  try {
    const authURL = `${apiURL}/auth`;
    const { data: jwt } = await axios.post( authURL, { email, password } );
    localStorage.setItem("token", jwt);
  } catch (e) {
      console.log("Exception occured: ", e);
  }
}

function getLoggedInUser(){
  try {
    const jwt = localStorage.getItem( tokenKey );
    console.log("Token from local storage: ", jwt);
    return jwtDecode(jwt);
  } catch (ex) {
    console.log("Problem while decoding: ", ex);
    return null;
  }
}

function loginWithJWT(jwt){
  console.log('Setting token: ', jwt);
  localStorage.setItem(tokenKey, jwt);
}

function logout(){
    localStorage.removeItem(tokenKey);
}

export default{
    login,
    logout,
    getLoggedInUser,
    loginWithJWT
}