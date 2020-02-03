import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from 'components/Input';
import ButtonsGroup from 'components/ButtonsGroup/ButtonsGroup';

import iconSortNumbersDESC from 'assets/icons/sort/sortNumbersDESC.svg';
import iconSortNumbersASC from 'assets/icons/sort/sortNumbersASC.svg';
import iconSortStringASC from 'assets/icons/sort/sortStringASC.svg';
import iconSortStringDESC from 'assets/icons/sort/sortStringDESC.svg';
import closeSortIcon from 'assets/icons/sort/closeSort.svg';

import { Constants } from 'config/Constants';

const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 92%;
  grid-row-gap: 10px;
  margin: 0px auto;
`;
const Title = styled.span`
  grid-column: 1/-1;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.color.blue[1]};
`;
const TextInputFilter = styled(Input)`
  grid-column: 1/-1;
  width: 80%;
  margin: 0px auto;
`;

const FilterControlers = ({
  filtersState: { sortName },
  onChangeFilter,
}) => {
  return (
    <Filters>
      <TextInputFilter
        type="text"
        name="sortName"
        placeholder={Constants.pl.STATEMENTS.findClient}
        onChange={onChangeFilter}
        value={sortName}
      />
      <Title>{Constants.pl.STATEMENTS.sort.alt}</Title>
      <ButtonsGroup
        name="sortEmail"
        onChange={onChangeFilter}
        title={Constants.pl.STATEMENTS.sort.email.title}
        buttons={[
          {
            value: Constants.sortTypes.default,
            title: Constants.pl.STATEMENTS.sort.notSort,
            onActive: Constants.pl.STATEMENTS.sort.email.defaultText,
            icon: closeSortIcon,
          },
          {
            value: Constants.sortTypes.sortEmail.asc,
            title: Constants.pl.STATEMENTS.sort.alfAsc,
            onActive: Constants.pl.STATEMENTS.sort.email.textAsc,
            icon: iconSortStringASC,
          },
          {
            value: Constants.sortTypes.sortEmail.desc,
            title: Constants.pl.STATEMENTS.sort.alfDesc,
            onActive: Constants.pl.STATEMENTS.sort.email.textDesc,
            icon: iconSortStringDESC,
          },
        ]}
      />
      <ButtonsGroup
        name="sortAge"
        onChange={onChangeFilter}
        title={Constants.pl.STATEMENTS.sort.age.title}
        buttons={[
          {
            value: Constants.sortTypes.default,
            title: Constants.pl.STATEMENTS.sort.notSort,
            onActive: Constants.pl.STATEMENTS.sort.age.defaultText,
            icon: closeSortIcon,
          },
          {
            value: Constants.sortTypes.sortAge.asc,
            title: Constants.pl.STATEMENTS.sort.ascending,
            onActive: Constants.pl.STATEMENTS.sort.age.textAsc,
            icon: iconSortNumbersASC,
          },
          {
            value: Constants.sortTypes.sortAge.desc,
            title: Constants.pl.STATEMENTS.sort.descending,
            onActive: Constants.pl.STATEMENTS.sort.age.textDesc,
            icon: iconSortNumbersDESC,
          },
        ]}
      />
    </Filters>
  );
};

FilterControlers.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  filtersState: PropTypes.shape({
    sortName: PropTypes.string,
    sortEmail: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    sortAge: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
};
FilterControlers.defaultProps = {
  filtersState: {
    sortName: '',
    sortEmail: '',
    sortAge: '',
  },
};

export default FilterControlers;
