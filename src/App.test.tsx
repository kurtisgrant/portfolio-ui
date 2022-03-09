import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders something with "ui"', () => {
  render(<App />);
  const element = screen.getByText(/ui/i);
  expect(element).toBeInTheDocument();
});
