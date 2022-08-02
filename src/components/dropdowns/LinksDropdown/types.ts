import type { ILabel } from '@/components/dropdowns';
import type { PrismicLinkProps } from '@prismicio/react';
import type { PropsWithChildren } from 'react';

export interface ILinksDropdownProps extends PropsWithChildren {
  options: ILinksDropdownOption[];
}

export interface ILinksDropdownOption extends ILabel {
  linkProps: PrismicLinkProps;
}
