// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';


const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Dit is waar je de API-aanroep doet naar je backend
    fetch('https://dashboardbackend-jych.onrender.com/api/data') // vervang met je specifieke API-endpoint
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home pagina als root route */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Route voor het weergeven van data */}
        <Route
          path="/data"
          element={
            <div>
              <h1>Data from Backend:</h1>
              {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
