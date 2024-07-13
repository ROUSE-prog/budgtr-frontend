import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggle}>×</button>
      <nav>
        <ul>
          <li><Link to="/" onClick={toggle}>Home</Link></li>
          <li><Link to="/create" onClick={toggle}>Add Transaction</Link></li>
          <li><Link to="/search" onClick={toggle}>Search Transactions</Link></li>
          <li><Link to="/update" onClick={toggle}>Update Transaction</Link></li>
          <li><Link to="/delete" onClick={toggle}>Delete Transaction</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
