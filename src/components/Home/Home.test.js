import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome to my Home Pages/i);
  expect(linkElement).toBeInTheDocument();
});
