import React, { useEffect, useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import MonthlyRewardsTable from "./components/MonthlyRewardsTable";
import TotalRewardsTable from "./components/TotalRewardsTable";
import { fetchTransactions } from "./services/api";
import {
  calculateRewards,
  groupByMonthYear,
  aggregateMonthlyRewards,
  aggregateTotalRewards,
  sortTransactionsByDate
} from "./helpers/rewardUtils";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchTransactions()
      .then((data) => {
        const withRewards = data.map(calculateRewards);
        setTransactions(sortTransactionsByDate(withRewards));
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const monthlyRewards = aggregateMonthlyRewards(transactions);
  const totalRewards = aggregateTotalRewards(monthlyRewards);
  return (
    <div className="App">
       <h1>User Rewards Dashboard</h1>
      {loading && <p>Loading transactions...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <>
          <TransactionsTable transactions={transactions} />
          <MonthlyRewardsTable data={monthlyRewards} />
          <TotalRewardsTable data={totalRewards} />
        </>
      )}
    </div>
  );
}

export default App;
