import axios from 'axios';
import auth from './auth';
import { apiURL } from './backend';
import _ from "lodash";

export async function register( user ){
  const userRegURL = `${apiURL}/users`;
  const normalisedUser = _.pick(user, ['firstName', 
                                        'sirName', 
                                        'email',
                                        'password',  
                                        'city', 
                                        'country', 
                                        'address', 
                                        'zip' ]);

  const { headers } = await axios.post(
    userRegURL,
    normalisedUser
  );

  auth.loginWithJWT(headers["x-auth-token"]);
}

export default {
    register
}