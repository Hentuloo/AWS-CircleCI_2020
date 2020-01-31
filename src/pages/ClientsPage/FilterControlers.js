import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Input from 'components/Input';
import CustomCheckbox from 'components/CustomCheckbox';

import sortNumbers from 'assets/icons/sortNumbers.svg';
import sortNumbersReserve from 'assets/icons/sortNumbersReserve.svg';

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
const CheckboxTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.color.blue[0]};
      color: ${({ theme }) => theme.color.white[0]};
    `}
`;
const CheckboxWithIcon = styled.div`
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
        placeholder="Znajdź klienta..."
        onChange={onChangeFilter}
        value={sortName}
      />
      <Title>Sortowanie</Title>
      <CustomCheckbox
        inputProps={{ name: 'sortEmail' }}
        onChange={onChangeFilter}
        checked={sortEmail}
        title="Sortuj według alfabetu (email)"
      >
        <CheckboxTextWrapper isActive={sortEmail.toString() !== '0'}>
          <span>{sortEmail === '2' ? 'CBA' : 'ABC'}</span>
          <SmallBadgeText>(email)</SmallBadgeText>
        </CheckboxTextWrapper>
      </CustomCheckbox>
      <CustomCheckbox
        inputProps={{ name: 'sortAge' }}
        onChange={onChangeFilter}
        checked={sortAge}
        title="Sortuj według alfabetu (email)"
      >
        <CheckboxWithIcon isActive={sortAge.toString() !== '0'}>
          <span>Wiek</span>
          {sortAge === '1' && (
            <Icon src={sortNumbers} alt="malejąco" />
          )}
          {sortAge === '2' && (
            <Icon src={sortNumbersReserve} alt="rosnąco" />
          )}
        </CheckboxWithIcon>
      </CustomCheckbox>
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
