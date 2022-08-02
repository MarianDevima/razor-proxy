export type Theme = typeof theme;

export const theme = {
  breakpoints: {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1600,
  },
  colors: {
    primary: '#FFFFFF',
    secondary: '#222831',
    accent: '#4F8A8B',
    white: '#FFF',
    black: '#000',
    blue1: '#1E2230',
    blue2: '#18182D',
    blue3: '#1E2230',
  },
  htmlFontSize: '21px',
} as const;

const media = '@media (min-width:';
export const deviceMediaQuery = {
  mobile: `${media} ${theme.breakpoints.mobile}px)`,
  tablet: `${media} ${theme.breakpoints.tablet}px)`,
  laptop: `${media} ${theme.breakpoints.laptop}px)`,
  desktop: `${media} ${theme.breakpoints.desktop}px)`,
} as const;
