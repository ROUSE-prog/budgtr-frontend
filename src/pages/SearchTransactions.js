import React, { useState, useEffect, useRef } from 'react';
import './SearchTransactions.css'; // Add a CSS file for styling

const SearchTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('https://budgtr-backend-6176.onrender.com/transactions');
        if (!response.ok) {
          throw new Error(`Error fetching transactions: ${response.statusText}`);
        }
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setError(error.message);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
      const scrollInterval = setInterval(() => {
        container.scrollTop += 1;
        if (container.scrollTop >= scrollHeight - container.clientHeight) {
          container.scrollTop = 0;
        }
      }, 50);
      return () => clearInterval(scrollInterval);
    }
  }, [transactions]);

  return (
    <div className="search-transactions-container">
      <h1>All Transactions</h1>
      {error ? (
        <p>There was an error fetching the transactions: {error}</p>
      ) : (
        <div className="transaction-list-container" ref={containerRef}>
          <ul className="transaction-list">
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                {transaction.description} - {transaction.amount} - {transaction.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchTransactions;
