import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import placeIcon from 'assets/icons/placeIcon.svg';
import circlesIcon from 'assets/icons/circles.svg';

import femaleIcon from 'assets/icons/femaleIcon.svg';
import maleIcon from 'assets/icons/maleIcon.svg';

import Button from 'components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 450px;
  margin: 0px auto;
  border-radius: 16px;
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.25);
`;
const HeaderBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
  min-height: 70px;
  padding: 5px 8px;
  border-radius: 16px 16px 0px 0px;
  background-color: ${({ theme }) => theme.color.blue[0]};
  margin-bottom: 15px;
  ${({ theme }) => theme.mediaQuery.lg} {
    margin-bottom: 20px;
    height: 80px;
  }
`;

const ClientDetails = styled.div`
  padding: 5px 0px;
`;

const Name = styled.p`
  display: inline-block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fs.s};
  margin-right: 5px;
`;
const Age = styled.small`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fs.xxxs};
  color: ${({ theme }) => theme.color.gray[1]};
`;
const Email = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fs.xxs};
  color: ${({ theme }) => theme.color.gray[0]};
  word-break: break-all;
  ${({ theme }) => theme.mediaQuery.md} {
    padding-top: 4px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Icon = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white[0]};
  border: 3px solid ${({ theme }) => theme.color.blue[0]};
  overflow: hidden;
  margin: 0px 5px 0px 0px;
  ${({ theme }) => theme.mediaQuery.md} {
    border: 4px solid ${({ theme }) => theme.color.blue[0]};
  }
`;
const Image = styled.img`
  position: absolute;
  width: 130%;
  max-height: 130%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  ${({ theme }) => theme.mediaQuery.md} {
    max-width: 120%;
    max-height: 100%;
  }
`;
const IconAvatar = styled(Icon)`
  width: 65px;
  height: 65px;
  bottom: -15px;
  ${({ theme }) => theme.mediaQuery.md} {
    width: 80px;
    height: 80px;
    bottom: -25px;
  }
  ${({ theme }) => theme.mediaQuery.lg} {
    bottom: -15px;
  }
`;
const IconSex = styled(Icon)`
  width: 30px;
  height: 30px;
  bottom: -10px;

  ${({ theme }) => theme.mediaQuery.md} {
    width: 35px;
    height: 35px;
    bottom: -15px;
  }
  ${({ theme }) => theme.mediaQuery.lg} {
    bottom: -5px;
  }

  ${Image} {
    width: 60%;
    border-radius: 0px;
  }
`;
const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  min-height: 55px;
  padding-bottom: 10px;
`;
const Place = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 45px 1fr;
  grid-template-rows: repeat(3, auto);
  padding-left: 15px;
  p {
    font-weight: bold;
  }
`;
const PlaceIcon = styled.img`
  grid-row: 1/-1;
  max-width: 100%;
  max-height: 100%;
`;
const StyleButton = styled(Button)`
  align-self: flex-end;
  width: 50px;
  height: 25px;
  margin: 0px 10px 0px 0px;
  img {
    max-width: 90%;
    transform: translateY(-25%);
    ${({ theme }) => theme.mediaQuery.md} {
      transform: translateY(-45%);
    }
  }
`;

const UserCard = ({
  name,
  age,
  email,
  address: { city, street, houseNumber },
  sex,
  avatar,
  as,
  className,
}) => (
  <Wrapper className={className} as={as}>
    <HeaderBar>
      <ClientDetails>
        <Name>{name}</Name>
        <Age>
          {age}
          lat
        </Age>
        <Email>{email}</Email>
      </ClientDetails>
      <Icons>
        <IconAvatar>
          <Image src={avatar} alt="avatar" />
        </IconAvatar>
        {sex}
        <IconSex>
          <Image
            src={sex ? femaleIcon : maleIcon}
            alt="płeć"
            title={sex ? 'Kobieta' : 'Mężczyzna'}
          />
        </IconSex>
      </Icons>
    </HeaderBar>
    <Details>
      <Place>
        <PlaceIcon src={placeIcon} alt="Miejsce zamieszkania" />
        <p>{city}</p>
        <p>{street}</p>
        <p>{houseNumber}</p>
      </Place>
      <StyleButton
        type="button"
        disabled="disabled"
        title="Więcej informacji"
      >
        <span className="sr-only">Więcej informacji</span>
        <img src={circlesIcon} alt="przycisk więcej informacji" />
      </StyleButton>
    </Details>
  </Wrapper>
);

UserCard.propTypes = {
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
  as: PropTypes.string,
  className: PropTypes.string,
};
UserCard.defaultProps = {
  as: 'div',
  className: '',
};

export default UserCard;
