import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UserCard from 'components/UserCard';
import { Constants } from 'config/Constants';

const ClientsWrapper = styled.ul`
  ${({ theme }) => theme.mediaQuery.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const StyledUserCard = styled(UserCard)`
  margin: 25px auto;
`;
const ErrorStatements = styled.p`
  display: block;
  margin: 20px auto;
  font-size: ${({ theme }) => theme.fs.s};
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.blue[1]};
`;

const Clients = ({ data }) => {
  if (data && data.length > 0) {
    return (
      <ClientsWrapper>
        {data.map(
          ({
            address: { city, street, houseNumber },
            _id,
            name,
            email,
            sex,
            avatar,
            age,
          }) => (
            <StyledUserCard
              key={_id}
              $as="li"
              name={name}
              age={age}
              email={email}
              address={{
                city,
                street,
                houseNumber,
              }}
              sex={sex}
              avatar={avatar}
            />
          ),
        )}
      </ClientsWrapper>
    );
  }
  return (
    <ErrorStatements>
      {Constants.pl.STATEMENTS.sort.empty}
    </ErrorStatements>
  );
};

Clients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      sex: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      address: PropTypes.shape({
        city: PropTypes.string,
        street: PropTypes.string,
        houseNumber: PropTypes.string,
      }).isRequired,
    }),
  ),
};
Clients.defaultProps = {
  data: null,
};

export default Clients;
