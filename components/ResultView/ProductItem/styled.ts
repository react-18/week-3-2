import styled from 'styled-components';

export const ProductNameContainer = styled.div`
  width: 100%;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.color.borderGray};
`;

export const ProductName = styled.span`
  display: inline-block;
  margin: 15px 10px;
`;
