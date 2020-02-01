import React from 'react';
import { withTheme } from 'config/testUtils';
import ClientsPage from 'pages/ClientsPage/ClientsPage';
import mockClients from '__mocks__/mockyClients.json';
import { fireEvent } from '@testing-library/react';
import { Constants } from 'config/Constants';

jest.mock('assets/clients.json', () =>
  // eslint-disable-next-line global-require
  require('__mocks__/mockyClients.json'),
);

const setup = () => {
  const el = withTheme(<ClientsPage />);
  return {
    ...el,
  };
};

describe('Page with clients list and filters controlers', () => {
  test('should display mocked clients', () => {
    const { getByText } = setup();
    const firstClientCard = getByText(mockClients.data[0].name);
    expect(firstClientCard).toBeInTheDocument();
  });

  test('should sort clients by email', () => {
    const { queryAllByTestId } = setup();

    const selectForEmailSort = queryAllByTestId('select-element')[0];
    let clientsCards = queryAllByTestId('user-card-component');

    expect(clientsCards[0]).toHaveTextContent(
      mockClients.data[0].name,
    );
    // second client
    expect(clientsCards[0]).not.toHaveTextContent(
      mockClients.data[1].name,
    );

    fireEvent.change(selectForEmailSort, {
      target: { value: Constants.sortTypes.sortEmail.asc },
    });

    // check select element
    expect(selectForEmailSort).toHaveValue(
      Constants.sortTypes.sortEmail.asc,
    );

    // update order of clientsCards
    clientsCards = queryAllByTestId('user-card-component');
    // check users card order
    expect(clientsCards[0]).toHaveTextContent(
      mockClients.data[1].name,
    );
    expect(clientsCards[0]).not.toHaveTextContent(
      mockClients.data[0].name,
    );
  });

  test('should sort clients by age', () => {
    const { queryAllByTestId } = setup();

    const selectForAgeSort = queryAllByTestId('select-element')[1];
    let clientsCards = queryAllByTestId('user-card-component');

    expect(clientsCards[0]).toHaveTextContent(
      mockClients.data[0].age,
    );
    // second client
    expect(clientsCards[0]).not.toHaveTextContent(
      mockClients.data[1].age,
    );

    fireEvent.change(selectForAgeSort, {
      target: { value: Constants.sortTypes.sortAge.desc },
    });

    // check select element
    expect(selectForAgeSort).toHaveValue(
      Constants.sortTypes.sortAge.desc,
    );

    // update order of clientsCards
    clientsCards = queryAllByTestId('user-card-component');
    // check users card order
    expect(clientsCards[0]).toHaveTextContent(
      mockClients.data[1].age,
    );
    expect(clientsCards[0]).not.toHaveTextContent(
      mockClients.data[0].age,
    );
  });

  test('should filter clients by input', () => {
    const { queryByPlaceholderText, queryAllByTestId } = setup();

    const inputNode = queryByPlaceholderText(
      Constants.pl.STATEMENTS.findClient,
    );
    let clientsCards = queryAllByTestId('user-card-component');

    expect(clientsCards.length).toBe(2);

    fireEvent.change(inputNode, {
      target: { value: mockClients.data[0].name },
    });

    // check select element
    expect(inputNode).toHaveValue(mockClients.data[0].name);

    // update order of clientsCards
    clientsCards = queryAllByTestId('user-card-component');
    // check users card order
    expect(clientsCards.length).toBe(1);
  });
});
