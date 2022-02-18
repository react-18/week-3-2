import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const QuickButtonWrapper = styled.div`
  width: 550px;
  overflow-x: scroll;
`;

export const QuickButtonContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const SearchResultWrapper = styled.div`
  height: 100px;
  overflow-y: scroll;
`;

export const SearchResultContainer = styled.div``;
