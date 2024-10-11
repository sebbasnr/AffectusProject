// frontend/src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [comment, setComment] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const analyzeSentiment = async () => {
    if (!comment.trim()) {
      setError('Por favor, ingresa un comentario.');
      return;
    }

    setLoading(true);
    setError('');
    setSentiment('');

    try {
      const response = await axios.post('/api/analyze', { comment });
      setSentiment(response.data.sentiment);
    } catch (err) {
      console.error(err);
      setError('Hubo un error al analizar el sentimiento.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Análisis de Sentimiento</h1>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe un comentario..."
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={analyzeSentiment} disabled={loading}>
        {loading ? 'Analizando...' : 'Analizar Sentimiento'}
      </button>
      {sentiment && (
        <p>
          <strong>Sentimiento:</strong> {sentiment}
        </p>
      )}
      {error && (
        <p className="error">
          <strong>Error:</strong> {error}
        </p>
      )}
    </div>
  );
}

export default App;
