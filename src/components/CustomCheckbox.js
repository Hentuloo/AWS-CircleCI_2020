import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { WithMultipleStateMood } from 'providers/WithMultipleStateMood';

const Wrapper = styled.div`
  cursor: pointer;
`;
const Label = styled.label`
  cursor: pointer;
`;
const ChildrenWrapper = styled.div`
  height: 100%;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.fs.m};
  color: ${({ theme }) => theme.color.blue[0]};
`;
const Input = styled.input``;

const CustomCheckbox = ({
  className,
  children,
  checked,
  onChange,
  title,
  inputProps,
}) => (
  <WithMultipleStateMood
    onChange={onChange}
    initialState={checked}
    render={({ state, triggerChange }) => (
      <Wrapper title={title} className={className}>
        <Label>
          <Input
            {...inputProps}
            className="sr-only"
            type="checkbox"
            checked={state}
            onChange={triggerChange}
          />
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Label>
      </Wrapper>
    )}
  />
);

CustomCheckbox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  title: PropTypes.string,
  inputProps: PropTypes.oneOfType([PropTypes.object]),
};

CustomCheckbox.defaultProps = {
  className: '',
  children: null,
  checked: 0,
  onChange: () => null,
  title: '',
  inputProps: {},
};

export default CustomCheckbox;
