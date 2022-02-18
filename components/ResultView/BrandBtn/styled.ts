import styled from 'styled-components';

export const BrandButton = styled.button`
  background-color: ${({ theme }) => theme.color.pointGreen};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-sizing: border-box;
  color: white;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  font-size: ${({ theme }) => theme.font.sizeS};
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 5px 12px;
  margin: 2px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;
  :focus-visible {
    box-shadow: #222222 0 0 0 1px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }
  :active {
    background-color: #728972;
    border-color: #728972;
    transform: scale(0.96);
  }
  :hover {
    box-shadow: #728972 0 0 0 0.5px, #c4bfb2 0 0 0 0.5px;
    transition: box-shadow 0.2s;
  }
  :disabled {
    border-color: #dddddd;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }
`;
