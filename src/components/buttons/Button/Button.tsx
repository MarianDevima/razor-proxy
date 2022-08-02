import styled from 'styled-components';

import type { StyledProps } from './types';
import type { CSSObject } from 'styled-components';

const DisabledStyles: CSSObject = {
  cursor: 'not-allowed',
  background: '#d4d4d4',
  color: ' #f5f5f5',
};

const Button = styled.button<StyledProps>(
  ({ theme, background, textColor }) => ({
    background,
    color: textColor,
    alignItems: 'center',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '.25rem',
    boxShadow: 'rgba(0, 0, 0, 0.02) 0 1px 3px 0',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: '.76rem',
    justifyContent: 'center',
    lineHeight: 1.25,
    margin: 0,
    minHeight: '3rem',
    padding: 'calc(.875rem - 1px) calc(1.5rem - 1px)',
    textDecoration: 'none',
    position: 'relative',
    transition: 'all 250ms',
    userSelect: 'none',
    touchAction: 'manipulation',
    verticalAlign: 'baseline',
    width: 'auto',
    ':hover, :focus': {
      borderColor: 'rgba(0, 0, 0, 0.15)',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px',
      color: 'rgba(0, 0, 0, 0.65)',
    },
    ':hover': {
      transform: 'translateY(-1px)',
    },
    ':active': {
      backgroundColor: theme.colors.accent,
      borderColor: 'rgba(0, 0, 0, 0.15)',
      boxShadow: 'rgba(0, 0, 0, 0.06) 0 2px 4px',
      color: 'rgba(0, 0, 0, 0.65)',
      transform: 'translateY(0)',
    },
  }),
  ({ disabled }) => disabled && DisabledStyles,
);

export default Button;
