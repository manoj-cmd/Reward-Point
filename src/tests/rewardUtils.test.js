import {
    calculateRewards,
    aggregateMonthlyRewards,
    aggregateTotalRewards
  } from "../helpers/rewardUtils";
  
  describe("Reward logic", () => {
    it("calculates correct reward points", () => {
      expect(calculateRewards({ price: 120 }).rewardPoints).toBe(90);
      expect(calculateRewards({ price: 75 }).rewardPoints).toBe(25);
      expect(calculateRewards({ price: 45 }).rewardPoints).toBe(0);
    });
  
    it("handles monthly aggregation", () => {
      const txs = [
        { date: "2023-12-01", price: 120, customerId: 1, name: "A", rewardPoints: 90 },
        { date: "2023-12-15", price: 70, customerId: 1, name: "A", rewardPoints: 20 }
      ];
      const res = aggregateMonthlyRewards(txs);
      expect(res[0].rewardPoints).toBe(110);
    });
  
    it("handles total aggregation", () => {
      const monthly = [
        { name: "A", rewardPoints: 80 },
        { name: "A", rewardPoints: 60 }
      ];
      const res = aggregateTotalRewards(monthly);
      expect(res["A"].rewardPoints).toBe(140);
    });
  });
  