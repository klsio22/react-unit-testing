import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from './App';

describe('App componet', () => {
  it('should render list item', () => {
    const { getByText } = render(<App />);
    expect(getByText('Diego')).toBeInTheDocument();
    expect(getByText('Rodz')).toBeInTheDocument();
    expect(getByText('Mayk')).toBeInTheDocument();
    expect(getByText('Klesio')).toBeInTheDocument();
  });

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const inputElement = getByPlaceholderText('Novo item');
    const addButton = getByText('Adicionar');

    userEvent.type(inputElement, 'Novo');
    userEvent.click(addButton);

    await waitFor(()=>{
      expect(getByText('Novo')).toBeInTheDocument();
    })

  });

  it('should be able to remove new item to the list', async () => {
    const { getByText, getAllByText } = render(<App />);

    const addButton = getByText('Adicionar');
    const removeButons = getAllByText('Remover')
   
    userEvent.click(removeButons[0]);

    await waitForElementToBeRemoved(()=>{
      return getByText('Diego')
    })

  });

});