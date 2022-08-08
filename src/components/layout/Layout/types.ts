import type { FooterDocument, NavigationDocument } from '@/prismic';
import type { Layout } from '@/types';
import type { PropsWithChildren } from 'react';

export interface ILayoutProps<
  PrismicNavigationType = NavigationDocument,
  PrismicFooterType = FooterDocument,
> extends PropsWithChildren {
  layoutType?: Layout;
  footer?: PrismicFooterType;
  navigation?: PrismicNavigationType;
}
