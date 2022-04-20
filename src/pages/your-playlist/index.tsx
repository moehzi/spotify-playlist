import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { RootState } from '../../store/store';
import { getMyPlaylist } from '../../services/spotify';
import { CardPlaylist } from '../../components/CardPlaylist';
import { Playlist } from '../../interfaces/PlaylistData';

export const YourPlaylist = () => {
  const token = useSelector((state: RootState) => state.token?.value);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    getMyPlaylist(token).then((res) => {
      setPlaylist(res.items);
      console.log(res.items);
    });
  }, [token]);

  const renderCardPlaylist = (datas: Playlist[]) => {
    return datas.map((item) => {
      return (
        <CardPlaylist
          name={item.name}
          key={item.uri}
          description={item.description}
          image={item.images[0]?.url}
        />
      );
    });
  };

  return (
    <div
      style={{
        color: 'white',
      }}
    >
      {token ? (
        <div
          style={{
            marginTop: '2rem',
            width: '90%',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              justifyContent: 'center',
            }}
          >
            {renderCardPlaylist(playlist)}
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};
