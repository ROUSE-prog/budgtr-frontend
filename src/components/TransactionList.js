import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('/api/transactions')
      .then(response => {
        setTransactions(response.data);
        calculateTotal(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the transactions!', error);
      });
  }, []);

  const calculateTotal = (transactions) => {
    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    setTotal(total);
  };

  return (
    <div>
      <h2>All Transactions</h2>
      <h3>Total: {total}</h3>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            <Link to={`/transactions/${transaction.id}`}>
              {transaction.item_name} - {transaction.amount}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
