import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  html: {
    fontSize: theme.htmlFontSize,
  },
  body: {
    color: theme.colors.primary,
    backgroundImage: `linear-gradient(90deg, ${theme.colors.blue1} 0%, ${theme.colors.blue2} 100%)`,
    padding: 0,
    margin: 0,
    fontFamily: ` -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  ['*']: {
    boxSizing: 'border-box',
  },
}));
