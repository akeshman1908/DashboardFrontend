// src/pages/Dashboard.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './Dashboard.css'; // Voeg extra styling toe

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Sidebar />
      <div className="content">
        <h1>Welkom bij het Coffa Bank B.V. Dashboard</h1>
        <p>Beheer je accounts, transacties en meer.</p>
      </div>
    </div>
  );
};

export default Dashboard;
