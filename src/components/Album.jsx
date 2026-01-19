import React from 'react';
import '../styles/Album.css';

export const Album = ({ album }) => {
  return (
    <div className="album-card">
      <div className="album-header">
        <span className="album-id">{album.formattedId}</span>
        <span className="album-photos">📷 {album.photoCount} fotos</span>
      </div>
      <h3 className="album-title">{album.formattedTitle}</h3>
      <p className="album-user">Usuario ID: <strong>{album.userId}</strong></p>
      <div className="album-footer">
        <button className="album-button">Ver Álbum</button>
      </div>
    </div>
  );
};
