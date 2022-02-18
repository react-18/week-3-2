import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");
  ${reset}
  * {
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.backgroundGreen};
  }
  
  input, button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
