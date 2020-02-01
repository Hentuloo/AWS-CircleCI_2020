import {
  isIncludeText,
  sortByAlphabet,
  sortByNumber,
} from 'config/utils';
import { Constants } from 'config/Constants';

export const filterClientsArray = (clientsArray, filterState) => {
  const { sortName, sortEmail, sortAge } = filterState;

  let clients =
    clientsArray.length &&
    clientsArray.filter(({ name }) => isIncludeText(name, sortName));
  if (sortEmail === Constants.sortTypes.sortEmail.asc) {
    clients = sortByAlphabet(clients, 'email');
  } else if (sortEmail === Constants.sortTypes.sortEmail.desc) {
    clients = sortByAlphabet(clients, 'email', true);
  }
  if (sortAge === Constants.sortTypes.sortAge.desc) {
    clients = sortByNumber(clients, 'age', true);
  } else if (sortAge === Constants.sortTypes.sortAge.asc) {
    clients = sortByNumber(clients, 'age');
  }
  return clients;
};
