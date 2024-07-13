// src/components/TransactionForm.js
import React, { useState } from 'react';
import './TransactionForm.css'; // Add a CSS file for styling

const TransactionForm = ({ onSubmit }) => {
  const [transaction, setTransaction] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(transaction);
    setTransaction({ description: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        value={transaction.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="amount"
        value={transaction.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        type="date"
        name="date"
        value={transaction.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
