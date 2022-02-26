import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import List from './components/List';

describe('App componet', () => {
  it('should render list item', async () => {
    const { getByText, rerender } = render(
      <List initialItems={['Diego', 'Rodz', 'Mayk', 'Klesio']} />
    );
    expect(getByText('Diego')).toBeInTheDocument();
    expect(getByText('Rodz')).toBeInTheDocument();
    expect(getByText('Mayk')).toBeInTheDocument();
    expect(getByText('Klesio')).toBeInTheDocument();

    rerender(<List initialItems={['Julia']} />);

    expect(screen.getByText('Julia')).toBeInTheDocument();
    expect(screen.queryByText('Mayk')).not.toBeInTheDocument();
  });

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(
      <List initialItems={['']} />
    );

    const inputElement = getByPlaceholderText('Novo item');
    const addButton = getByText('Adicionar');

    userEvent.type(inputElement, 'Novo');
    userEvent.click(addButton);

    await waitFor(() => {
      expect(getByText('Novo')).toBeInTheDocument();
    });
  });

  it('should be able to remove new item to the list', async () => {
    const { getByText, getAllByText } = render(
      <List initialItems={['Diego']} />
    );

    const addButton = getByText('Adicionar');
    const removeButons = getAllByText('Remover');

    userEvent.click(removeButons[0]);

    await waitForElementToBeRemoved(() => {
      return getByText('Diego');
    });
  });
});
