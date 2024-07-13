import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import CreateTransaction from './pages/CreateTransaction';
import EditTransaction from './pages/EditTransaction';
import ShowTransaction from './pages/ShowTransaction';
import SearchTransactions from './pages/SearchTransactions';
import UpdateTransaction from './pages/UpdateTransaction';
import DeleteTransaction from './pages/DeleteTransaction';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div>
        <button className="burger-btn" onClick={toggleSidebar}>☰</button>
        <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTransaction />} />
          <Route path="/edit/:id" element={<EditTransaction />} />
          <Route path="/transaction/:id" element={<ShowTransaction />} />
          <Route path="/search" element={<SearchTransactions />} />
          <Route path="/update" element={<UpdateTransaction />} />
          <Route path="/delete" element={<DeleteTransaction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
