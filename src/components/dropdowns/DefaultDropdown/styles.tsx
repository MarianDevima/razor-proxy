import styled from 'styled-components';

import { Box, FlexBox } from '@/components/box';

import type { StyledDropdown, StyledDropdownItem, StyledWrapper } from './types';
import type { Theme } from '@/constants';
import type { CSSObject } from 'styled-components';

export const showCss: CSSObject = {
  visibility: 'visible',
  opacity: 1,
};

export const transitionCss: CSSObject = {
  transition: 'opacity 0.2s ease',
};

export const Dropdown = styled(Box)<StyledDropdown>(
  {
    position: 'absolute',
    zIndex: 1,
    opacity: 0,
    visibility: 'hidden',
    ...transitionCss,
  },
  ({ isVisible }) => isVisible && { ...showCss },
  ({ hasTriangle }) => hasTriangle && { top: 'calc(100% + 10px)' },
);

export const DropdownContent = styled(FlexBox)(({ theme }) => ({
  minWidth: '10rem',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  borderRadius: '5px',
  backgroundColor: theme.colors.accent,
  border: '1.5px solid slategrey',
}));

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
      backgroundColor: theme.colors.secondary,
      outline: 'none',
    },
  }),
  ({ theme, isActive }) => isActive && activeItem(theme),
);

export const Triangle = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: 10,
  opacity: 0,
  visibility: 'hidden',
  ...transitionCss,
  ':after': {
    content: '""',
    position: 'relative',
    left: 'calc(50% - 10px)',
    top: -25,
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '10px solid #FFFF',
    clear: 'both',
  },
});

export const Wrapper = styled(Box)<StyledWrapper>(
  ({}) => ({
    position: 'relative',
  }),
  ({ openOnHover }) =>
    openOnHover && {
      ':hover': {
        [Dropdown]: {
          ...showCss,
          // paddingTop: 10
        },
        [Triangle]: showCss,
      },
    },
);
