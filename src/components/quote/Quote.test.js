import { render, screen } from '@testing-library/react';
import Quote from './Quote';

test('renders learn react link', () => {
  render(<Quote />);
  const linkElement = screen.getByText(/Quote of the Day/i);
  expect(linkElement).toBeInTheDocument();
});
