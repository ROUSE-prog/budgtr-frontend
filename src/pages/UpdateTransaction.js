import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateTransaction.css'; // Add a CSS file for styling

const UpdateTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    item_name: '',
    amount: '',
    date: '',
    from: '',
    category: '',
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://budgtr-backend-6176.onrender.com/transactions/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });
      if (!response.ok) {
        throw new Error(`Error updating transaction: ${response.statusText}`);
      }
      navigate('/search'); // Redirect to search page after update
    } catch (error) {
      console.error('Error updating transaction:', error);
      setError(error.message);
    }
  };

  return (
    <div className="update-transaction-container">
      <h1>Update Transaction</h1>
      {error && <p className="error">{error}</p>}
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
        <button type="submit">Update Transaction</button>
      </form>
    </div>
  );
};

export default UpdateTransaction;
