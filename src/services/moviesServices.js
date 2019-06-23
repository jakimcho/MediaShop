import axios from 'axios';
import { apiURL } from './backend';

export async function getMovies(  ){
  const moviesUrl = `${apiURL}/movies`;
  console.log(`I do get request ${moviesUrl}`)
  const { data } = await axios.get(
    moviesUrl
  );
  
  console.log(`I got data ${JSON.stringify(data)}`)
  return data;
}