import React from "react";
import PropTypes from "prop-types";

function MonthlyRewardsTable({ data }) {
  return (
    <div>
      <h2>User Monthly Rewards</h2>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Month</th>
            <th>Year</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.customerId}</td>
              <td>{entry.name}</td>
              <td>{entry.month}</td>
              <td>{entry.year}</td>
              <td>{entry.rewardPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

MonthlyRewardsTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default MonthlyRewardsTable;
