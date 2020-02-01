import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Input from 'components/Input';
import CheckboxMultiOptions from 'components/CheckboxMultiOptions';

import sortNumbers from 'assets/icons/sortNumbers.svg';
import sortNumbersReserve from 'assets/icons/sortNumbersReserve.svg';

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
const TextWithBadge = styled.div`
  display: flex;
  flex-direction: column;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.color.blue[0]};
      color: ${({ theme }) => theme.color.white[0]};
    `}
`;
const TextWithIcon = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: auto 40px;
  padding: 0px 15px;
  align-items: center;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.color.blue[0]};
      color: ${({ theme }) => theme.color.white[0]};
    `}
`;
const SmallBadgeText = styled.small`
  font-size: ${({ theme }) => theme.fs.mini};
  letter-spacing: 0px;
  font-weight: lighter;
`;
const Icon = styled.img`
  display: block;
  height: 39px;
`;

const FilterControlers = ({
  filtersState: { sortName, sortEmail, sortAge },
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
      <CheckboxMultiOptions
        options={[
          {
            value: Constants.sortTypes.default,
            name: Constants.pl.STATEMENTS.sort.default,
          },
          {
            value: Constants.sortTypes.sortEmail.desc,
            name: Constants.pl.STATEMENTS.sort.alfDesc,
          },
          {
            value: Constants.sortTypes.sortEmail.asc,
            name: Constants.pl.STATEMENTS.sort.alfAsc,
          },
        ]}
        name="sortEmail"
        defaultOption={Constants.sortTypes.default}
        onChange={onChangeFilter}
        title={Constants.pl.STATEMENTS.sort.email}
      >
        <TextWithBadge
          isActive={sortEmail !== Constants.sortTypes.default}
        >
          <span>
            {sortEmail === Constants.sortTypes.sortEmail.asc
              ? 'CBA'
              : 'ABC'}
          </span>
          <SmallBadgeText>(email)</SmallBadgeText>
        </TextWithBadge>
      </CheckboxMultiOptions>
      <CheckboxMultiOptions
        options={[
          {
            value: Constants.sortTypes.default,
            name: Constants.pl.STATEMENTS.sort.default,
          },
          {
            value: Constants.sortTypes.sortAge.desc,
            name: Constants.pl.STATEMENTS.sort.ascending,
          },
          {
            value: Constants.sortTypes.sortAge.asc,
            name: Constants.pl.STATEMENTS.sort.descending,
          },
        ]}
        name="sortAge"
        defaultOption={Constants.sortTypes.default}
        onChange={onChangeFilter}
        title={Constants.pl.STATEMENTS.sort.age}
      >
        <TextWithIcon
          isActive={sortAge !== Constants.sortTypes.default}
        >
          <span>Wiek</span>
          {sortAge === Constants.sortTypes.sortAge.desc && (
            <Icon
              src={sortNumbers}
              alt={Constants.pl.STATEMENTS.sort.descending}
            />
          )}
          {sortAge === Constants.sortTypes.sortAge.asc && (
            <Icon
              src={sortNumbersReserve}
              alt={Constants.pl.STATEMENTS.sort.ascending}
            />
          )}
        </TextWithIcon>
      </CheckboxMultiOptions>
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
    sortEmail: '0',
    sortAge: '0',
  },
};

export default FilterControlers;
