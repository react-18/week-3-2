import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black: string;
      white: string;
      borderGray: string;
      backgroundGreen: string;
      backgroundBeige: string;
      pointGreen: string;
    };
    borderRadius: string;
    shadow: string;
    font: {
      sizeL: string;
      sizeM: string;
      sizeS: string;
      weightM: string;
      weightS: string;
    };
  }
}
