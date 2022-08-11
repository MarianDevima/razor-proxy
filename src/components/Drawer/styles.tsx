import styled from 'styled-components';

import { Box } from '@/components/box';

import type { IStyledDrawer, IStyledDrawerWrapper } from './types';
import type { CSSObject } from 'styled-components';

const transitionSpeed = '0.3s';

const horizontalDrawer: CSSObject = {
  minWidth: '30%',
  maxWidth: '50%',
  height: '100%',
  top: 0,
};
const verticalDrawer: CSSObject = {
  left: 0,
  right: 0,
  width: '100%',
  minHeight: '40%',
  maxHeight: '70%',
};
const leftDrawer: CSSObject = {
  left: 0,
  transform: 'translateX(-100%)',
  ...horizontalDrawer,
};
const rightDrawer: CSSObject = {
  right: 0,
  transform: 'translateX(100%)',
  ...horizontalDrawer,
};
const topDrawer: CSSObject = {
  top: 0,
  transform: 'translateY(-100%)',
  ...verticalDrawer,
};
const bottomDrawer: CSSObject = {
  bottom: 0,
  transform: 'translateY(100%)',
  ...verticalDrawer,
};

const drawerPositions = {
  left: leftDrawer,
  top: topDrawer,
  right: rightDrawer,
  bottom: bottomDrawer,
} as const;

const OpenXDrawer: CSSObject = {
  transform: 'translateX(0)',
};
const OpenYDrawer: CSSObject = {
  transform: 'translateY(0)',
};

const drawerOpenPositions = {
  left: OpenXDrawer,
  top: OpenYDrawer,
  right: OpenXDrawer,
  bottom: OpenYDrawer,
} as const;

export const Drawer = styled(Box)<IStyledDrawer>(
  ({ theme }) => ({
    background: theme.colors.white,
    overflow: 'auto',
    position: 'fixed',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    transition: `transform ${transitionSpeed} ease`,
    zIndex: 1000,
  }),
  ({ position }) => drawerPositions[position],
);

export const Backdrop = styled(Box)({
  visibility: 'hidden',
  opacity: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  transition: `opacity ${transitionSpeed} ease, visibility ${transitionSpeed} ease`,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 0,
});

export const Wrapper = styled(Box)<IStyledDrawerWrapper>(
  ({ isOpen, position, isTransitioning }) =>
    isTransitioning &&
    isOpen && {
      [Drawer]: {
        ...drawerOpenPositions[position],
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
      },
      [Backdrop]: {
        visibility: 'visible',
        opacity: 1,
        pointerEvents: 'auto',
        zIndex: 999,
      },
    },
);
