import React, { useState, useEffect } from 'react';

import { getPlaylists } from '../../utils/getPlaylists';

const PlaylistsPage = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylists();
      setPlaylists(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Suas Playlists</h2>
      <div>
        <div>
          {playlists ? (
            playlists.items.map(({ id, images, name, tracks }, i) => (
              <div key={i}>
                <div to={id}>
                  {images.length ? (
                    <div src={images[0].url} alt="Album Art" />
                  ) : (
                    <div>
                      <div>
                        <div />
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <div to={id}>{name}</div>
                  <div>{tracks.total} Tracks</div>
                </div>
              </div>
            ))
          ) : (
            <div>false</div>
          )}
        </div>
      </div>
      <div>
      <a href="/create-playlist">Criar Playlist</a>
      </div>
    </div>
  );
};

export default PlaylistsPage;
