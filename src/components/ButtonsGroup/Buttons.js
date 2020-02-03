import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  position: absolute;
  max-width: 35%;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  display: block;
  background-color: transparent;
  transform: translate(-50%, 0%);
  &:focus {
    ${({ theme }) => theme.mediaQuery.md} {
      outline: 0;
    }
  }
`;
const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
export const ButtonsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s 0.15s linear;
  ${({ length, theme }) => {
    switch (length) {
      case 1:
        return css`
          ${Button}:nth-of-type(1) {
            left: 50%;
            top: 0%;
          }
        `;
      case 2:
        return css`
          ${Button}:nth-of-type(1) {
            left: 50%;
            top: 0%;
          }
          ${Button}:nth-of-type(2) {
            left: 50%;
            bottom: 1%;
          }
        `;
      case 3:
        return css`
          ${Button}:nth-of-type(1) {
            left: 50%;
            top: -1%;
          }
          ${theme.mediaQuery.md} {
            ${Button}:nth-of-type(1) {
              top: -4%;
            }
          }
          ${Button}:nth-of-type(2) {
            left: 22%;
            bottom: 4%;
          }
          ${theme.mediaQuery.md} {
            ${Button}:nth-of-type(2) {
              left: 20%;
            }
          }
          ${Button}:nth-of-type(3) {
            right: 22%;
            bottom: 4%;
            transform: translate(50%, 0%);
          }
          ${theme.mediaQuery.md} {
            ${Button}:nth-of-type(3) {
              right: 22%;
            }
          }
        `;
      case 4:
        return css`
          ${Button}:nth-of-type(1) {
            left: 25%;
            top: 5%;
          }
          ${Button}:nth-of-type(2) {
            right: 25%;
            top: 5%;
            transform: translate(50%, 0%);
          }
          ${Button}:nth-of-type(3) {
            left: 25%;
            bottom: 8%;
          }
          ${Button}:nth-of-type(4) {
            right: 25%;
            bottom: 8%;
            transform: translate(50%, 0%);
          }
        `;
      default:
        return null;
    }
  }}
`;

const Buttons = ({ buttons, onClick }) => {
  return (
    <ButtonsWrapper length={buttons.length}>
      {buttons.map(({ value, title, icon }, index) => (
        <Button
          type="button"
          key={value}
          title={title}
          onClick={() => onClick(index)}
        >
          <span className="sr-only">{title}</span>
          <Icon src={icon} alt={title} />
        </Button>
      ))}
    </ButtonsWrapper>
  );
};

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      icon: PropTypes.string,
      onActive: PropTypes.node,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
