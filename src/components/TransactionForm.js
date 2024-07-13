// src/components/TransactionForm.js
import React, { useState } from 'react';
import './TransactionForm.css'; // Add a CSS file for styling

const TransactionForm = ({ onSubmit }) => {
  const [transaction, setTransaction] = useState({
    item_name: '',
    amount: '',
    date: '',
    from: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(transaction);
    setTransaction({
      item_name: '',
      amount: '',
      date: '',
      from: '',
      category: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="item_name"
        value={transaction.item_name}
        onChange={handleChange}
        placeholder="Item Name"
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
      <input
        type="text"
        name="from"
        value={transaction.from}
        onChange={handleChange}
        placeholder="From"
        required
      />
      <input
        type="text"
        name="category"
        value={transaction.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
