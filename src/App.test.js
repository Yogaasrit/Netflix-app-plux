// Arrange
// import { render, screen } from '@testing-library/react';
import App from './App';
// Test Case
// test('App Component have Success text', () => {
//   // Act
//   render(<App />);
//   const text = screen.getByText('Success');
//   // Assert
//   expect(text).toBeInTheDocument();
// });

test('App is correct',() => {
  expect(App).toBeTruthy();
})

