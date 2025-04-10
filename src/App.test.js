import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders reward dashboard with headings', async () => {
  render(<App />);

  // Shows loading state
  expect(screen.getByText(/loading transactions/i)).toBeInTheDocument();

  // Wait until data is loaded and headings appear
  await waitFor(() => {
    expect(screen.getByText(/Transactions/i)).toBeInTheDocument();
    expect(screen.getByText(/User Monthly Rewards/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Rewards/i)).toBeInTheDocument();
  });
});
