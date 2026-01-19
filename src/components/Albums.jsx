import React, { useState, useEffect } from 'react';
import { Album } from './Album';
import { albumService } from '../services/albumService';
import { useAuth } from '../context/AuthContext';
import '../styles/Albums.css';

export const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { logout, user } = useAuth();

  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(albums.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAlbums = albums.slice(startIndex, endIndex);

  const handleLoadAlbums = async () => {
    setLoading(true);
    setError(null);
    setCurrentPage(1);
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

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="albums-container">
      <div className="albums-top-bar">
        <div className="albums-user-section">
          <span className="user-info">👤 {user?.username}</span>
        </div>
        <button onClick={logout} className="logout-button-albums">
          Cerrar Sesión
        </button>
      </div>

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

      <div className="albums-grid">
        {currentAlbums.length > 0 ? (
          currentAlbums.map(album => (
            <Album key={album.id} album={album} />
          ))
        ) : (
          !loading && !loaded && (
            <div className="empty-state">
              <p> Presiona el botón "Cargar Álbumes" para comenzar</p>
            </div>
          )
        )}
      </div>

      {albums.length > 0 && (
        <div className="pagination-container">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            ← Anterior
          </button>

          <div className="pagination-info">
            <span>Página {currentPage} de {totalPages}</span>
            <span className="pagination-items">(Mostrando {startIndex + 1}-{Math.min(endIndex, albums.length)} de {albums.length})</span>
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Siguiente →
          </button>
        </div>
      )}

      {loaded && albums.length === 0 && !error && (
        <div className="empty-state">
          <p>No hay álbumes disponibles</p>
        </div>
      )}
    </div>
  );
};
