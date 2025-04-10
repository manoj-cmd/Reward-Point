import transactions from "../data/mockTransactions";

export const fetchTransactions = () => {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve(transactions));
  });
};