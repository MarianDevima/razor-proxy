import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  html: {
    fontSize: theme.htmlFontSize,
  },
  body: {
    color: theme.colors.primary,
    background: `linear-gradient(90deg, ${theme.colors.blue1} 0%, ${theme.colors.blue2} 100%)`,
    fontFamily: ` -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
    padding: 0,
    margin: 0,
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  ['*']: {
    boxSizing: 'border-box',
  },
}));
