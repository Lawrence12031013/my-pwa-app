import { render, screen } from '@testing-library/react';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// 註冊 Service Worker
serviceWorkerRegistration.register();