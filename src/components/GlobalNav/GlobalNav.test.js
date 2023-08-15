import { render, screen } from '@testing-library/react';
import GlobalNav from './GlobalNav';

test('renders learn react link', () => {
  render(<GlobalNav />);
  const linkElement = screen.getByText(/Math Magicians/i);
  expect(linkElement).toBeInTheDocument();
});
