// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateTransaction from './pages/CreateTransaction';
import EditTransaction from './pages/EditTransaction';
import ShowTransaction from './pages/ShowTransaction';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTransaction />} />
        <Route path="/edit/:id" element={<EditTransaction />} />
        <Route path="/transaction/:id" element={<ShowTransaction />} />
      </Routes>
    </Router>
  );
}

export default App;
