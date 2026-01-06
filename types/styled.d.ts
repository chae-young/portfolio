import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      gray: string;
      gray_2: string;
      green_1: string;
      purple: string;
    };
    fonts: {
      subEng: string;
    };
    deviceSizes: {
      mobileS: string;
      tablet: string;
      tabletL: string;
      desktop: string;
      maxSize: string;
    };
    device: {
      mobileS: string;
      mobileL: string;
      tabletL: string;
      tabletWidthDesktop: string;
      onlyTablet: string;
      desktop: string;
    };
  }
}
