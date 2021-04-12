import axios from 'axios';
import { token } from './getAccessToken'

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

export const getUser = () => axios
  .get(
    'https://api.spotify.com/v1/search?q=${search}&type=album%2Cartist', { headers }
  ).then(response => {
    console.log(response.data);
    return response.data
  })

