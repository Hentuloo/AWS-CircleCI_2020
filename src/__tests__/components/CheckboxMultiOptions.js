import React from 'react';
import CheckboxMultiOptions from 'components/CheckboxMultiOptions';
import { withTheme } from 'config/testUtils';
import { fireEvent } from '@testing-library/react';

const elementInnerText = 'child of component';
const selectTestID = 'select-element';
const buttonTestId = 'button-element';

afterEach(() => {
  jest.clearAllMocks();
});

const defaultProps = {
  options: [
    { value: 'some_default_value', name: 'some first value' },
    {
      value: 'first_value',
      name: 'add some sorter',
    },
    { value: 'second_value', name: 'add some other sorter' },
  ],
  name: 'multipleStateCheckbox',
  defaultOption: 'second_value',
  onChange: jest.fn(),
  title: 'nice checkbox blah',
};

const setup = (props = defaultProps) => {
  const el = withTheme(
    <CheckboxMultiOptions {...props}>
      {elementInnerText}
    </CheckboxMultiOptions>,
  );
  return {
    ...el,
  };
};

describe('Custom checkbox component', () => {
  test('should display title prop', () => {
    const { getByText } = setup();

    const titleOfCheckbox = getByText(defaultProps.title);

    expect(titleOfCheckbox).toBeInTheDocument();
  });

  test('should display options', () => {
    const { getByText } = setup();

    defaultProps.options.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  test('should choose default option from props', () => {
    const { getByTestId } = setup();

    const selectNode = getByTestId(selectTestID);

    expect(selectNode).toBeInTheDocument();
    expect(selectNode).toHaveValue(defaultProps.defaultOption);
    expect(selectNode).not.toHaveValue('some other value');
  });

  test('should change active option by select node group', () => {
    const { getByText, getByTestId } = setup();

    const selectNode = getByTestId(selectTestID);
    const firstOption = getByText(defaultProps.options[0].name);

    expect(firstOption).toBeInTheDocument();
    expect(selectNode).toHaveValue(defaultProps.defaultOption);

    fireEvent.change(selectNode, {
      target: { value: defaultProps.options[0].value },
    });

    expect(selectNode).toHaveValue(defaultProps.options[0].value);
  });

  test('should change active option by button', () => {
    const { getByTestId } = setup();

    const button = getByTestId(buttonTestId);

    expect(button).toHaveValue(defaultProps.defaultOption);
    expect(button).toHaveValue(defaultProps.options[2].value);

    fireEvent.click(button);

    expect(button).toHaveValue(defaultProps.options[0].value);
  });

  test('should dispatch callback function from props', () => {
    const { getByTestId } = setup();

    const button = getByTestId(buttonTestId);
    const selectNode = getByTestId(selectTestID);

    expect(button).toHaveValue(defaultProps.defaultOption);
    expect(button).toHaveValue(defaultProps.options[2].value);
    expect(defaultProps.onChange).toHaveBeenCalledTimes(0);

    fireEvent.click(button);

    expect(button).toHaveValue(defaultProps.options[0].value);
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);

    fireEvent.change(selectNode, {
      target: { value: defaultProps.options[2].value },
    });
    expect(button).toHaveValue(defaultProps.options[2].value);
    expect(defaultProps.onChange).toHaveBeenCalledTimes(2);
  });
});
