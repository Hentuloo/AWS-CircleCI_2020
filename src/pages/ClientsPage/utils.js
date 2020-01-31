import {
  isIncludeText,
  sortByAlphabet,
  sortByNumber,
} from 'config/utils';

export const filterClientsArray = (clientsArray, filterState) => {
  const { sortName, sortEmail, sortAge } = filterState;

  let clients =
    clientsArray.length &&
    clientsArray.filter(({ name }) => isIncludeText(name, sortName));
  if (sortEmail === '1') {
    clients = sortByAlphabet(clients, 'email');
  } else if (sortEmail === '2') {
    clients = sortByAlphabet(clients, 'email', true);
  }
  if (sortAge === '1') {
    clients = sortByNumber(clients, 'age');
  } else if (sortAge === '2') {
    clients = sortByNumber(clients, 'age', true);
  }
  return clients;
};
