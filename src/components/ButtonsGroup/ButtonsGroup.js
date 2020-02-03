import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Buttons, { ButtonsWrapper } from './Buttons';

const Wrapper = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin: -10px auto;
  &:hover,
  &:active,
  &:focus {
    &::before {
      transform: scale(1.1);
    }
    &::after {
      transform: scale(0.46);
    }
    ${ButtonsWrapper} {
      pointer-events: auto;
      opacity: 1;
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.blue[2]};
    z-index: -1;
    transition: transform 0.4s ease;
    transform: scale(0.65);
  }
  &::after {
    background-color: ${({ theme }) => theme.color.blue[1]};
  }
`;

const InnerClircle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: ${({ theme }) => theme.fs.xs};
  transform: translate(-50%, -50%);
  color: white;
`;

const ButtonsGroup = ({
  buttons,
  className,
  name,
  onChange,
  title,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = buttonIndex => {
    setActiveIndex(buttonIndex);
    onChange({ target: { name, value: buttons[buttonIndex].value } });
  };
  if (buttons.length > 0) {
    return (
      <Wrapper className={className} tabindex="0">
        {title && <p className="sr-only">{title}</p>}
        <InnerClircle data-testid="onActive-text">
          {buttons[activeIndex].onActive}
        </InnerClircle>
        <Buttons buttons={buttons} onClick={handleButtonClick} />
      </Wrapper>
    );
  }
  return null;
};

ButtonsGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      icon: PropTypes.string,
      onActive: PropTypes.node,
    }),
  ),
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  title: PropTypes.string,
};

ButtonsGroup.defaultProps = {
  buttons: [],
  className: '',
  name: '',
  onChange: () => null,
  title: null,
};

export default ButtonsGroup;
