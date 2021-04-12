import axios from 'axios';
import { token } from './getAccessToken'

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

export const addPlaylistTracks = (playlistId, uris) => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=spotify:track:${uris}`;
  return axios({ method: 'post', url, headers });
};