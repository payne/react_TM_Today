// Thanks co-piolot chat!
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders home page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Home component/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders assigned page', () => {
  render(
    <MemoryRouter initialEntries={['/assigned']}>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/assigned roles/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders unassigned page', () => {
  render(
    <MemoryRouter initialEntries={['/unassigned']}>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Unassigned/i);
  expect(linkElement).toBeInTheDocument();
});

