export const calculateRewards = (transaction) => {
    const { price } = transaction;
    let points = 0;
  
    if (price > 100) {
      points += 2 * Math.floor(price - 100);
      points += 50;
    } else if (price > 50) {
      points += Math.floor(price - 50);
    }
  
    return { ...transaction, rewardPoints: points };
  };
  
  export const groupByMonthYear = (transactions) => {
    return transactions.reduce((acc, tx) => {
      const date = new Date(tx.date);
      const key = `${tx.customerId}-${date.getFullYear()}-${date.getMonth()}`;
      if (!acc[key]) {
        acc[key] = {
          customerId: tx.customerId,
          name: tx.name,
          month: date.toLocaleString("default", { month: "long" }),
          year: date.getFullYear(),
          rewardPoints: 0
        };
      }
      acc[key].rewardPoints += tx.rewardPoints;
      return acc;
    }, {});
  };
  
  export const aggregateMonthlyRewards = (transactions) => {
    const grouped = groupByMonthYear(transactions);
    return Object.values(grouped);
  };
  
  export const aggregateTotalRewards = (monthlyRewards) => {
    return monthlyRewards.reduce((acc, item) => {
      if (!acc[item.name]) {
        acc[item.name] = { name: item.name, rewardPoints: 0 };
      }
      acc[item.name].rewardPoints += item.rewardPoints;
      return acc;
    }, {});
  };
  
  export const sortTransactionsByDate = (data) =>
    [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  