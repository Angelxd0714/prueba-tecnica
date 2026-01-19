import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error, user, logout } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      setUsername('');
      setPassword('');
    } catch (err) {
    }
  };

  if (user) {
    return (
      <div className="login-container">
        <div className="logged-in">
          <h2>¡Bienvenido!</h2>
          <p>Usuario: <strong>{user.username}</strong></p>
          <p>Nombre: <strong>{user.name}</strong></p>
          <button onClick={logout} className="logout-button">
            Cerrar Sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar Sesión</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
            disabled={loading}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="1234"
            disabled={loading}
            required
          />
        </div>



        <button type="submit" disabled={loading} className="login-button">
          {loading ? 'Cargando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};
