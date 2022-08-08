import type { LinkField } from '@prismicio/types';
import type { PropsWithChildren } from 'react';

export interface IButtonLinkProps extends PropsWithChildren {
  link: LinkField;
  className?: string;
}
