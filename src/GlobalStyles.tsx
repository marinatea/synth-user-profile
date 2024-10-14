// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset stylów */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Open Sans', sans-serif; /* Ustal domyślną czcionkę */
    line-height: 1.5; /* Ustal domyślną wysokość linii */
    color: #333; /* Ustal domyślny kolor tekstu */
    background-color: #fff; /* Ustal domyślny kolor tła */
  }

  /* Możesz dodać inne resetujące style dla elementów, takich jak: */
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal; /* Ustal domyślną wagę czcionki */
  }

  a {
    text-decoration: none; /* Wyłącz podkreślenie linków */
    color: inherit; /* Spraw, aby kolor linków dziedziczył kolor rodzica */
  }

  /* Dodaj inne style resetujące w zależności od potrzeb */
`;

export default GlobalStyles;
