# React Rewards Dashboard

A clean and modular React.js application that calculates customer reward points from transactions and displays them in three distinct tables: User Monthly Rewards, Total Rewards, and Transactions.

## 🚀 Project Overview

This application simulates a reward points program for customers based on their purchase history. The system displays:
- **User Monthly Rewards** by month/year.
- **Total Rewards** per customer.
- **Transaction History** with product details.

The rewards logic is based on:
- $1 spent over $50 earns 1 point.
- $1 spent over $100 earns 2 points (in addition to the 1 point per $1 over $50).

## ✨ Features

- 📅 **3-Month Data View**: Displays transactions across 3 consecutive months.
- 🧮 **Pure Calculation Logic**: All reward calculations are done via pure functions.
- 📊 **Clean Data Tables**: Modular tables showing detailed and summarized information.
- 🔄 **Dynamic Loading States**: Shown based on actual API responses.
- 💥 **Error Handling**: Graceful fallback when errors occur.
- ✅ **PropTypes Validation**: All props are validated using PropTypes.
- 📦 **Test Coverage**: Includes unit tests using Jest and React Testing Library.
- 🌍 **Localized Dates**: Purchase dates are rendered in readable local format.

---

## 📁 Directory Structure

src/ ├── api/ │ └── fetchData.js # Simulated async API call ├── components/ │ ├── MonthlyRewardsTable/ │ ├── TotalRewardsTable/ │ └── TransactionsTable/ ├── data/ │ └── mockTransactions.js # Sample transaction data ├── utils/ │ └── rewardUtils.js # Pure functions for reward calculation ├── App.js # Main application component ├── index.js # React entry point ├── App.test.js # Unit tests └── styles/ └── Table.css # Basic table styling


---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/rewards-dashboard.git
   cd rewards-dashboard

Install dependencies

npm install
Run the development server

npm start
Visit http://localhost:3000 in your browser.

🧠 Approach and Design Decisions
Pure Functions: All reward logic is handled via pure, testable functions in utils/rewardUtils.js.

Modular Components: Each table is its own component for maintainability.

No Redux/TypeScript: As per requirements, plain React state was used.

Date Sorting & Grouping: Transactions are sorted during render, not stored pre-sorted.

🧪 Testing
Jest and React Testing Library are used to test:

Reward calculation functions

Component rendering

Edge cases and UI behavior

To run tests:

npm test
🧮 Reward Logic
js
// $120 -> (2 * 20) + (1 * 50) = 90 points
// $70  -> (1 * 20) = 20 points

Handles:

Fractional prices: $100.4 earns 50 points.
Multiple years/months.
Aggregation across months/years.

🖼️ Screenshots
✅ User Monthly Rewards Table

🧾 Transaction History

🧮 Total Rewards Table

⏳ Loading State

⚠️ Error State

Screenshots are stored in the public/screenshots/ folder.

💡 Tips for Further Development
Use real APIs in place of mockTransactions.js.

Add filters (by customer/date range).

Implement pagination for large datasets.

📜 License
MIT License — feel free to use, modify, and distribute.

🤝 Contributing
Fork the repo

Create a new branch (git checkout -b feature/fooBar)

Commit your changes (git commit -am 'Add some fooBar')

Push to the branch (git push origin feature/fooBar)

Open a Pull Request