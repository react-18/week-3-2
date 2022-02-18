import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.color.backgroundBeige};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const QuickButtonWrap = styled.div`
  width: 92%;
  padding: 20px 10px 10px 0;
  overflow-x: scroll;
`;

export const QuickButtonContainer = styled.div`
  display: flex;
`;

export const SearchResultWrap = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
`;

export const SearchResultContainer = styled.div`
  padding: 20px;
`;
