import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DeleteTransaction.css'; // Add a CSS file for styling

const DeleteTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await fetch(`https://budgtr-backend-6176.onrender.com/transactions/${id}`);
        if (!response.ok) {
          throw new Error(`Error fetching transaction: ${response.statusText}`);
        }
        const data = await response.json();
        setTransaction(data);
      } catch (error) {
        console.error('Error fetching transaction:', error);
        setError(error.message);
      }
    };

    fetchTransaction();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://budgtr-backend-6176.onrender.com/transactions/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Error deleting transaction: ${response.statusText}`);
      }
      navigate('/search'); // Redirect to search page after deletion
    } catch (error) {
      console.error('Error deleting transaction:', error);
      setError(error.message);
    }
  };

  return (
    <div className="delete-transaction-container">
      <h1>Delete Transaction</h1>
      {error && <p className="error">{error}</p>}
      {transaction && (
        <div className="transaction-details">
          <p><strong>Item Name:</strong> {transaction.item_name}</p>
          <p><strong>Amount:</strong> {transaction.amount}</p>
          <p><strong>Date:</strong> {transaction.date}</p>
          <p><strong>From:</strong> {transaction.from}</p>
          <p><strong>Category:</strong> {transaction.category}</p>
          <button onClick={handleDelete}>Delete Transaction</button>
        </div>
      )}
    </div>
  );
};

export default DeleteTransaction;
