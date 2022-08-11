import type { ILabel } from '@/components/dropdowns';
import type { PropsWithClassName } from '@/types';
import type { PrismicLinkProps } from '@prismicio/react';
import type { LinkField } from '@prismicio/types';
import type { PropsWithChildren } from 'react';

export interface ILinksDropdownProps extends PropsWithChildren<PropsWithClassName> {
  options: ILinksDropdownOption[];
}

export interface ILinksDropdownOption extends ILabel {
  linkProps?: Omit<PrismicLinkProps, 'field'>;
  link: LinkField;
}
