import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

test('renders learn react link', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/do some maths/i);
  expect(linkElement).toBeInTheDocument();
});
