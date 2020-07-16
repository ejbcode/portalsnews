import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *, *::after, *::before {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colorBackground};
    color: ${({ theme }) => theme.colorSecundary};
    font-family: 'Roboto', sans-serif;
    max-width: 1280px;
    margin: 0 auto;
  }

.grid,
.subgrid {
  display: grid;
  ${
    '' /* grid-column-gap: var(--column-gap);
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr)); */
  }
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 0.3rem;
  position: relative;
}
`;

export default GlobalStyles;
