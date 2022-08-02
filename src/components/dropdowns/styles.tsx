import styled from 'styled-components';

import { FlexBox } from '@/components/box';

import type { StyledDropdown, StyledDropdownItem } from './types';
import type { Theme } from '@/constants';
import type { CSSObject } from 'styled-components';

export const triangleCss: CSSObject = {
  marginTop: 10,
  ':after': {
    content: '""',
    position: 'absolute',
    left: 'calc(50% - 10px)',
    top: -10,
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '10px solid #FFFF',
    clear: 'both',
  },
};
export const openDropdownCss: CSSObject = {
  overflow: 'auto',
  maxHeight: '40vmax',
  visibility: 'visible',
};
export const Dropdown = styled(FlexBox)<StyledDropdown>(
  ({ theme }) => ({
    position: 'absolute',
    minWidth: '10rem',
    padding: '0.4rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    borderRadius: '5px',
    backgroundColor: theme.colors.accent,
    border: '1.5px solid slategrey',
    zIndex: 1,
    transition: 'max-height 0.4s ease 0.4',
    overflow: 'hidden',
    maxHeight: 0,
    visibility: 'hidden',
  }),
  ({ isVisible }) => isVisible && openDropdownCss,
  ({ triangle }) => triangle && triangleCss,
);

const activeItem: (theme: Theme) => CSSObject = ({ colors }) => ({
  color: colors.primary,
  fontWeight: 500,
});

export const DropdownItem = styled(FlexBox)<StyledDropdownItem>(
  ({ theme }) => ({
    alignItems: 'center',
    padding: '0.3rem 0.6rem',
    borderRadius: '0.3rem',
    cursor: 'pointer',

    '&:hover, :focus, :focus:hover': {
      backgroundColor: theme.colors.primary,
      outline: 'none',
    },
  }),
  ({ theme, isActive }) => isActive && activeItem(theme),
);
