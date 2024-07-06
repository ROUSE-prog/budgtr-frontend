import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const TransactionForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const [transaction, setTransaction] = useState({
    item_name: '',
    amount: '',
    date: '',
    from: '',
    category: ''
  });

  useEffect(() => {
    if (id) {
      axios.get(`/api/transactions/${id}`)
        .then(response => {
          setTransaction(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the transaction!', error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({
      ...transaction,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`/api/transactions/${id}`, transaction)
        .then(() => {
          history.push(`/transactions/${id}`);
        })
        .catch(error => {
          console.error('There was an error updating the transaction!', error);
        });
    } else {
      axios.post('/api/transactions', transaction)
        .then(response => {
          history.push(`/transactions/${response.data.id}`);
        })
        .catch(error => {
          console.error('There was an error creating the transaction!', error);
        });
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit' : 'Create'} Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input type="text" name="item_name" value={transaction.item_name} onChange={handleChange} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" value={transaction.amount} onChange={handleChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={transaction.date} onChange={handleChange} required />
        </div>
        <div>
          <label>From:</label>
          <input type="text" name="from" value={transaction.from} onChange={handleChange} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={transaction.category} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TransactionForm;
