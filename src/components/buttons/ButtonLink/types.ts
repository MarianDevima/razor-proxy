import type { PropsWithClassName } from '@/types';
import type { LinkField } from '@prismicio/types';
import type { PropsWithChildren } from 'react';

export interface IButtonLinkProps extends PropsWithClassName<PropsWithChildren> {
  link: LinkField;
}
