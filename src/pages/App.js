import React from 'react';
import styled from 'styled-components';
import UserCard from 'components/UserCard';

const Wrapper = styled.main``;

const App = () => (
  <Wrapper>
    <aside>
      <h1>Klienci</h1>
    </aside>
    <ul>
      <UserCard
        as="li"
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
    </ul>
    Hello world
  </Wrapper>
);

export default App;
