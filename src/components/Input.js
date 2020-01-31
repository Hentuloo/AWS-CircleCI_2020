import styled from 'styled-components';

const Input = styled.input`
  min-height: 35px;
  padding-left: 14px;
  border: 2px solid ${({ theme }) => theme.color.blue[0]};
  border-radius: 8px;
  font-weight: bold;
`;
export default Input;
