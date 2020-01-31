import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Constants } from 'config/Constants';

const Wrapper = styled.div``;
const ChildrenWrapper = styled.div`
  height: 100%;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.fs.m};
  color: ${({ theme }) => theme.color.blue[0]};
`;
const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline-color: transparent;
`;

const CheckboxMultiOptions = ({
  options,
  className,
  children,
  name,
  defaultOption,
  onChange,
  title,
}) => {
  const [activeOption, setactiveOption] = useState(
    defaultOption || (options[0] && options[0].value) || null,
  );
  const selectRef = useRef(null);

  const changeOption = e => {
    if (e.target.tagName === 'SELECT') {
      setactiveOption(e.target.value);
      onChange(e);
      return;
    }
    const update = value => {
      setactiveOption(value);
      selectRef.current.value = value;
      onChange({ target: selectRef.current });
    };
    const nextValueIndex =
      options.findIndex(({ value }) => value === activeOption) + 1;
    if (nextValueIndex === options.length) {
      update(options[0].value);
      return;
    }
    update(options[nextValueIndex].value);
  };

  if (options.length > 0) {
    return (
      <Wrapper className={className} title={title}>
        {title && <p className="sr-only">{title}</p>}
        <select
          ref={selectRef}
          name={name}
          className="sr-only"
          onChange={changeOption}
          value={activeOption}
        >
          {options.map(({ value, name: nameOfOption }) => (
            <option key={value} value={value}>
              {nameOfOption}
            </option>
          ))}
        </select>
        <Button
          type="button"
          value={activeOption}
          onClick={changeOption}
        >
          <span className="sr-only">
            {Constants.pl.STATEMENTS.chooseNextOption}
          </span>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Button>
      </Wrapper>
    );
  }
  return null;
};

CheckboxMultiOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  className: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func,
  title: PropTypes.string,
};

CheckboxMultiOptions.defaultProps = {
  options: [],
  className: '',
  children: null,
  name: '',
  defaultOption: null,
  onChange: () => null,
  title: null,
};

export default CheckboxMultiOptions;
