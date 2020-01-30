import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ theme }) => theme.fs.m};
  background-color: ${({ theme }) => theme.color.blue[0]};
  border: none;
  color: ${({ theme }) => theme.color.white[0]};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue[1]};
  }
`;
export default Button;
