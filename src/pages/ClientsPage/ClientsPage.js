import React, { useReducer, useMemo } from 'react';
import styled from 'styled-components';

import Clients from 'assets/clients.json';
import { Constants } from 'config/Constants';
import FilterControlers from './FilterControlers';

import ClientsList from './ClientsList';
import { filterClientsArray } from './utils';

const Wrapper = styled.main`
  ${({ theme }) => theme.mediaQuery.lg} {
    width: 90%;
    max-width: 1200px;
    margin: 0px auto;
  }
`;
const Bar = styled.aside`
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0%;
  left: 0%;
  background-color: ${({ theme }) => theme.color.blue[0]};
  padding-left: 20px;
  z-index: 10;
  ${({ theme }) => theme.mediaQuery.md} {
    height: 100vh;
    width: 120px;
  }
`;
const BarTitle = styled.h1`
  font-weight: bold;
  line-height: 70px;
  text-transform: uppercase;
`;
const Content = styled.div`
  margin-top: 90px;
  ${({ theme }) => theme.mediaQuery.md} {
    margin-top: 10px;
    margin-left: 120px;
  }
`;

const App = () => {
  const { data: ClientsArray } = Clients;
  const [filterValues, setFilterValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      sortName: '',
      sortEmail: Constants.sortTypes.default,
      sortAge: Constants.sortTypes.default,
    },
  );

  const handleChangeFilter = e => {
    const { value, name } = e.target;
    if (filterValues[name] !== value) {
      setFilterValues({ [name]: value });
    }
  };

  const FilteredClients = useMemo(
    () => filterClientsArray(ClientsArray, filterValues),
    [ClientsArray, filterValues],
  );

  return (
    <Wrapper>
      <Bar>
        <BarTitle>Klienci</BarTitle>
      </Bar>
      <Content>
        <FilterControlers
          filtersState={filterValues}
          onChangeFilter={handleChangeFilter}
        />
        <ClientsList data={FilteredClients} />
      </Content>
    </Wrapper>
  );
};

export default App;
