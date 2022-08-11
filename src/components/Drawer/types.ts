import type { PropsWithClassName } from '@/types';
import type { PropsWithChildren } from 'react';

const drawerPositions = ['left', 'top', 'right', 'bottom'] as const;
export interface IDrawerProps
  extends PropsWithChildren<PropsWithClassName>,
    IUseDrawer,
    Partial<IStyledDrawer> {
  onClose?: () => void;
  removeWhenClosed?: boolean;
}

export interface IStyledDrawerWrapper extends IStyledDrawer {
  isOpen: boolean;
  isTransitioning?: boolean;
}

export interface IStyledDrawer {
  position: typeof drawerPositions[number];
}

export interface IUseDrawer extends Pick<IStyledDrawerWrapper, 'isOpen'> {
  onClose?: () => void;
}
