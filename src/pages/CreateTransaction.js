// src/pages/CreateTransaction.js
import React from 'react';
import TransactionForm from '../components/TransactionForm';
import './CreateTransaction.css'; // Add a CSS file for styling
import { useNavigate } from 'react-router-dom';

const CreateTransaction = () => {
  const navigate = useNavigate();

  const addTransaction = async (transaction) => {
    try {
      const response = await fetch('https://budgtr-backend-6176.onrender.com/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });

      if (!response.ok) {
        throw new Error('Failed to create transaction');
      }

      const data = await response.json();
      console.log('Transaction created:', data); // Add this line

      // Handle success (e.g., redirect to home page or show success message)
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="create-transaction-container">
      <h1>Create Transaction</h1>
      <TransactionForm onSubmit={addTransaction} />
    </div>
  );
};

export default CreateTransaction;
