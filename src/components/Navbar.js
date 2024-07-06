import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Budgtr</h1>
      <Link to="/transactions/create">New Transaction</Link>
    </nav>
  );
};

export default Navbar;
