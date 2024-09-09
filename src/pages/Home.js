// pages/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getConfig } from '../config'; // Importeer de configuratie
import './Home.css'; // Importeer de custom CSS

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Gebruik de useNavigate hook

  // Verkrijg de juiste API URL op basis van de omgeving
  const { API_URL } = getConfig();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Inloggen succesvol!');
        // Redirect naar /dashboard
        navigate('/dashboard');
      } else {
        setMessage(data.error || 'Inloggen mislukt');
      }
    } catch (error) {
      setMessage('Er is een fout opgetreden. Probeer het opnieuw.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Coffa Bank B.V.</h1>
        <p className="login-subtitle">Beveiligde login</p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label className="form-label">Gebruikersnaam:</label>
            <input
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Wachtwoord:</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Inloggen</button>
        </form>
        {message && <p className="login-message">{message}</p>}
      </div>
    </div>
  );
};

export default Home;
