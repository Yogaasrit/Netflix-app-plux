import { render, screen } from '@testing-library/react';
import App from './App';

test('App Component have Success text', () => {
  render(<App />);
  const text = screen.getByText('Success');
  expect(text).toBeInTheDocument();
});
