import type { ILinkProps } from '@/components/links/Link';
import type { LinkProps } from 'next/link';

export interface NextLinkTextProps extends Omit<ILinkProps, 'href'> {
  href: LinkProps['href'];
  linkProps?: Omit<LinkProps, 'passHref' | 'href' | 'children'>;
}
