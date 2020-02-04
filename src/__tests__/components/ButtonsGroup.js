import React from 'react';
import ButtonsGroup from 'components/ButtonsGroup/ButtonsGroup';
import { withTheme } from 'config/testUtils';
import { fireEvent } from '@testing-library/react';
import 'jest-styled-components';

const elementWithActiveText = 'onActive-text';

afterEach(() => {
  jest.clearAllMocks();
});

const defaultProps = {
  name: 'multiple_checkbox',
  onChange: jest.fn(),
  title: 'nice checkbox blah',
  buttons: [
    {
      value: 'some_default_value',
      title: 'some first value',
      icon: 'nice icon',
      onActive: 'my text from default button',
    },
    {
      value: 'first_value',
      title: 'add some sorter',
      icon: 'nice icon2',
      onActive: 'my text from first button',
    },
    {
      value: 'second_value',
      title: 'add some other sorter',
      icon: 'nice icon3',
      onActive: 'my text from second button',
    },
  ],
};

const setup = (props = defaultProps) => {
  const el = withTheme(<ButtonsGroup {...props} />);
  return {
    ...el,
  };
};

describe('ButtonsGroup component', () => {
  test('mocked buttons snapshot', () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should display title prop', () => {
    const { getByText } = setup();

    const titleOfCheckbox = getByText(defaultProps.title);

    expect(titleOfCheckbox).toBeInTheDocument();
  });

  test('should display options', () => {
    const { getByText } = setup();

    defaultProps.buttons.forEach(({ title }) => {
      expect(getByText(title)).toBeInTheDocument();
    });
  });

  test('should choose first button as default (as active)', () => {
    const { getByTestId } = setup();

    const activeText = getByTestId(elementWithActiveText);

    expect(activeText).toBeInTheDocument();
    expect(activeText).toHaveTextContent(
      defaultProps.buttons[0].onActive,
    );
    expect(activeText).not.toHaveTextContent('some other value');
  });

  test('should change active option by button click', () => {
    const { getAllByRole, getByTestId } = setup();

    const activeText = getByTestId(elementWithActiveText);
    const buttons = getAllByRole('button');

    expect(activeText).toHaveTextContent(
      defaultProps.buttons[0].onActive,
    );
    expect(buttons[1]).toHaveTextContent(
      defaultProps.buttons[1].title,
    );

    fireEvent.click(buttons[1]);

    expect(activeText).toHaveTextContent(
      defaultProps.buttons[1].onActive,
    );
  });

  test('should dispatch callback function from props', () => {
    const { getAllByRole, getByTestId } = setup();

    const buttons = getAllByRole('button');
    const activeText = getByTestId(elementWithActiveText);

    expect(defaultProps.onChange).toHaveBeenCalledTimes(0);

    fireEvent.click(buttons[2]);

    expect(activeText).toHaveTextContent(
      defaultProps.buttons[2].onActive,
    );
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    expect(defaultProps.onChange).toHaveBeenCalledWith({
      target: {
        name: defaultProps.name,
        value: defaultProps.buttons[2].value,
      },
    });
  });
});
