import React from "react";
import PropTypes from "prop-types";

function TotalRewardsTable({ data }) {
  const entries = Object.values(data);

  return (
    <div>
      <h2>Total Rewards</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.rewardPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TotalRewardsTable.propTypes = {
  data: PropTypes.object.isRequired
};

export default TotalRewardsTable;
