import { getByTestId, render } from '@testing-library/react';
import App from './App';

test('myfunction', () => {
  const { getByText } = render(<App />);
  const div = getByText('Hello World')

 // const test = getByTestId('test');

  expect(div).toHaveClass('text');
});
  