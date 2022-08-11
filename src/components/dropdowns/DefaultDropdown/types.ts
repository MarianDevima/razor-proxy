import type { PropsWithClassName } from '@/types';
import type { PropsWithChildren, ReactNode } from 'react';

export interface IDefaultDropdownProps
  extends PropsWithChildren<PropsWithClassName>,
    StyledWrapper {
  buttonChildren: ReactNode | ReactNode[];
  triangle?: boolean;
  open?: boolean;
}
export interface StyledDropdown {
  isVisible?: boolean;
  triangle: IDefaultDropdownProps['triangle'];
}
export interface StyledDropdownItem {
  isActive?: boolean;
}
export interface StyledWrapper {
  openOnHover?: boolean;
}
