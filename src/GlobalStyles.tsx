import { createGlobalStyle } from "styled-components";
import { colors } from "./styles/colors";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin: 0 auto;
  }

  html, body {
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5; 
    color: ${colors.color.primary}; 
    background-color: ${colors.color.white};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
