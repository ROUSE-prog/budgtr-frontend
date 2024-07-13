import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransactionList from '../components/TransactionList';
import './Home.css'; // Add a CSS file for styling

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('https://budgtr-backend-6176.onrender.com/transactions');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="home-container">
      <h1>Transactions</h1>
      <Link to="/create" className="create-button">Add Transaction</Link>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Home;