// Imports
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

// To Test
import App from '../App';

// Tests
test('Renders main page correctly', async () => {
  // Setup
  render(<App />);
  const buttonCount = await screen.findByRole('button');
  const codeCount = await screen.queryByText(/The count is now:/);

  // Pre Expecations
  expect(buttonCount.innerHTML).toBe('count is: 0');
  // Instead of:
  // expect(codeCount).toBeNull();
  expect(codeCount).not.toBeInTheDocument();

  // Init
  await user.click(buttonCount);
  await user.click(buttonCount);
  user.click(buttonCount).then(() => {
    console.log('clicked');
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    console.log('finally');
  });

  user.click(buttonCount).then(() => {
    console.log('clicked');
  });

  // Post Expectations
  expect(buttonCount.innerHTML).toBe('count is: 2');
  expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
});
