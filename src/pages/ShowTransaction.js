import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Button, Paper } from '@mui/material';

const ShowTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5001/api/transactions/${id}`)
      .then(response => {
        setTransaction(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the transaction!', error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5001/api/transactions/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error deleting the transaction!', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: '16px', marginTop: '16px' }}>
        <Typography variant="h4" gutterBottom>
          Transaction Detail
        </Typography>
        <Typography variant="body1"><strong>Item:</strong> {transaction.item_name}</Typography>
        <Typography variant="body1"><strong>Amount:</strong> ${transaction.amount}</Typography>
        <Typography variant="body1"><strong>Date:</strong> {transaction.date}</Typography>
        <Typography variant="body1"><strong>From:</strong> {transaction.from}</Typography>
        <Typography variant="body1"><strong>Category:</strong> {transaction.category}</Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '16px', marginRight: '8px' }}
          onClick={() => navigate(`/transactions/${id}/edit`)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: '16px' }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Paper>
    </Container>
  );
};

export default ShowTransaction;
