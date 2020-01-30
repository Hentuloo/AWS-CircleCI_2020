import React from 'react';
import styled from 'styled-components';
import UserCard from 'components/UserCard';

import Clients from 'assets/clients.json';

const Wrapper = styled.main``;
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
const UsersWrapper = styled.ul`
  ${({ theme }) => theme.mediaQuery.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const StyledUserCard = styled(UserCard)`
  margin: 25px auto;
`;

const App = () => {
  const { data: ClientsArray } = Clients;
  console.log(ClientsArray);
  return (
    <Wrapper>
      <Bar>
        <BarTitle>Klienci</BarTitle>
      </Bar>
      <Content>
        <UsersWrapper>
          {ClientsArray
            ? ClientsArray.map(
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
            )
            : null}
        </UsersWrapper>
      </Content>
    </Wrapper>
  );
};

export default App;
