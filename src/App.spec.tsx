import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from './App';

/* test('myfunction', () => {
  const { getByTestId } = render(<App />);
  const h1 = getByTestId('h1')


  expect(h1).toHaveClass('teste');
}); */

describe('App componet', () => {
  it('should render list item', () => {
    const { getByText } = render(<App />);
    expect(getByText('Diego')).toBeInTheDocument();
    expect(getByText('Rodz')).toBeInTheDocument();
    expect(getByText('Mayk')).toBeInTheDocument();
    expect(getByText('Klesio')).toBeInTheDocument();
  });

  it('should be able to add new item to the list', () => {
    const { getByText, debug } = render(<App />);
    const addButton = getByText('Adicionar');

    debug()//mostra ação executada no processo de execução da aplicação

    userEvent.click(addButton);

    debug()

    expect(getByText('Novo')).toBeInTheDocument();
  });
});
