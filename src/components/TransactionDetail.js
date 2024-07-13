import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const TransactionDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    axios.get(`/transactions/${id}`)
      .then(response => {
        setTransaction(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the transaction!', error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`/transactions/${id}`)
      .then(() => {
        history.push('/');
      })
      .catch(error => {
        console.error('There was an error deleting the transaction!', error);
      });
  };

  return (
    <div>
      <h2>Transaction Detail</h2>
      <p>Item: {transaction.item_name}</p>
      <p>Amount: {transaction.amount}</p>
      <p>Date: {transaction.date}</p>
      <p>From: {transaction.from}</p>
      <p>Category: {transaction.category}</p>
      <button onClick={() => history.push(`/transactions/${id}/edit`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TransactionDetail;
