import React from 'react';
import styled from 'styled-components';
import UserCard from 'components/UserCard';

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

const App = () => (
  <Wrapper>
    <Bar>
      <BarTitle>Klienci</BarTitle>
    </Bar>
    <Content>
      <UsersWrapper>
        <StyledUserCard
          $as="li"
          name="Krzystof Wichura"
          age={18}
          email="cjsdjao@o2.pl"
          address={{
            city: 'Gorzów',
            street: 'Zielonogórska',
            houseNumber: '18',
          }}
          sex={false}
          avatar="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
        />
      </UsersWrapper>
    </Content>
  </Wrapper>
);

export default App;
