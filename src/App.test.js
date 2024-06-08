import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('test that App component renders', () => {
  render(<App />, container);
 });

test(data-testid="new-item-button", () => {
  render(<App/>, container);
  const element = screen.getByTestId('new-item-button');
  expect(element).toBeInTheDocument();
});

test(data-testid="new-item-textfield", () => {
  render(<App/>, container);
  const element = screen.getByTestId('new-item-textfield');
  expect(element).toBeInTheDocument();
});
