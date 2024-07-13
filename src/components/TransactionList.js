import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Container, Typography } from '@mui/material';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/transactions')
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the transactions!', error);
      });
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom>
        Transactions
      </Typography>
      <List>
        {transactions.map(transaction => (
          <ListItem key={transaction._id}>
            <ListItemText
              primary={`${transaction.item_name} - $${transaction.amount}`}
              secondary={`Date: ${transaction.date}, From: ${transaction.from}, Category: ${transaction.category}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TransactionList;
