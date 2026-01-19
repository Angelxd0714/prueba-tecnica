import React, { useState } from 'react';
import '../styles/AddAlbumModal.css';

export const AddAlbumModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    userId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.userId.trim()) {
      onAdd(formData);
      setFormData({ title: '', userId: '' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Agregar Nuevo Álbum</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="title">Título del Álbum:</label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Ej: Mi viaje a la playa"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="userId">ID del Usuario:</label>
            <input
              id="userId"
              type="number"
              name="userId"
              value={formData.userId}
              onChange={handleInputChange}
              placeholder="Ej: 1"
              min="1"
              required
            />
          </div>

          <div className="modal-buttons">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-add">
              Agregar Álbum
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
