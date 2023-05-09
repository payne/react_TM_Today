// Imports
import { render } from '@testing-library/react';

// To Test

// Tests
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('Renders main page correctly', async () => {
  // Setup
  render(<MemoryRouter><App /></MemoryRouter>);
});
