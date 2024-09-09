// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css'; // Importeer de CSS voor styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '❮' : '❯'}
      </button>
      <ul className="sidebar-list">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#accounts">Accounts</a></li>
        <li><a href="#transactions">Transactions</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
