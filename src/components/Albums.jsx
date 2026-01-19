import React, { useState, useEffect } from 'react';
import { Album } from './Album';
import { albumService } from '../services/albumService';
import '../styles/Albums.css';

export const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const handleLoadAlbums = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await albumService.getAllAlbums();
      const structuredData = albumService.structureAlbums(data);
      setAlbums(structuredData);
      setLoaded(true);
    } catch (err) {
      setError('No se pudieron cargar los álbumes. Intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="albums-container">
      <div className="albums-header">
        <h1>Galería de Álbumes</h1>
        <p>Explora nuestra colección de álbumes</p>
      </div>

      <div className="load-button-container">
        <button
          onClick={handleLoadAlbums}
          disabled={loading}
          className="load-button"
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Cargando álbumes...
            </>
          ) : loaded ? (
            <>
              ✓ Recargando álbumes...
            </>
          ) : (
            'Cargar Álbumes'
          )}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {albums.length > 0 && (
        <div className="albums-info">
          <p>Se encontraron <strong>{albums.length}</strong> álbumes</p>
        </div>
      )}

      <div className="albums-grid">
        {albums.length > 0 ? (
          albums.map(album => (
            <Album key={album.id} album={album} />
          ))
        ) : (
          !loading && !loaded && (
            <div className="empty-state">
              <p>📚 Presiona el botón "Cargar Álbumes" para comenzar</p>
            </div>
          )
        )}
      </div>

      {loaded && albums.length === 0 && !error && (
        <div className="empty-state">
          <p>No hay álbumes disponibles</p>
        </div>
      )}
    </div>
  );
};
