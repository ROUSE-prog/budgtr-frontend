import React, { useEffect, useRef } from 'react';
import './TransactionList.css';

const TransactionList = ({ transactions }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
      const scrollInterval = setInterval(() => {
        container.scrollTop += 1;
        if (container.scrollTop >= scrollHeight - container.clientHeight) {
          container.scrollTop = 0;
        }
      }, 50);
      return () => clearInterval(scrollInterval);
    }
  }, [transactions]);

  const recentTransactions = transactions.slice(-5);

  return (
    <div className="transaction-list-container" ref={containerRef}>
      <ul className="transaction-list">
        {recentTransactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - {transaction.amount} - {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
