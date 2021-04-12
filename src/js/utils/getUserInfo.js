import axios from 'axios';
import { token } from './getAccessToken'

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

export const getUser = () => axios
  .get(
    'https://api.spotify.com/v1/me', { headers }
  );