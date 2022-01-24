import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  font-size: 12px;
`;

export const Button = styled.button`
  margin-left: 20px;
  cursor: pointer;
  font-size: 10px;
`;
