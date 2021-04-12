import axios from 'axios';
import { token } from './getAccessToken'

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

export const getPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', { headers });

export const createPlaylist = (userId, name, description) => {
  const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
  const data = JSON.stringify({ name, description });
  return axios({ method: 'post', url, headers, data });
};