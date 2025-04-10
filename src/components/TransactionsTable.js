import React from "react";
import PropTypes from "prop-types";

function TransactionsTable({ transactions }) {
  return (
    <div>
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Product</th>
            <th>Price ($)</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.name}</td>
              <td>{new Date(tx.date).toLocaleDateString()}</td>
              <td>{tx.product}</td>
              <td>{tx.price.toFixed(2)}</td>
              <td>{tx.rewardPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default TransactionsTable;
