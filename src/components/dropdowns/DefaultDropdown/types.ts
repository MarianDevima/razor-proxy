import type { PropsWithClassName } from '@/types';
import type { PropsWithChildren, ReactNode } from 'react';

export interface IDefaultDropdownProps
  extends PropsWithChildren<PropsWithClassName>,
    StyledWrapper {
  buttonChildren: ReactNode | ReactNode[];
  hasTriangle?: boolean;
  isOpen?: boolean;
}
export interface StyledDropdown {
  isVisible?: boolean;
  hasTriangle: IDefaultDropdownProps['hasTriangle'];
}
export interface StyledDropdownItem {
  isActive?: boolean;
}
export interface StyledWrapper {
  openOnHover?: boolean;
}
