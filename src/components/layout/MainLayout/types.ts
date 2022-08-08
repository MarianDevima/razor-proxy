import type { FooterDocument, NavigationDocument, SeoDocument } from '@/prismic';
import type { PropsWithChildren } from 'react';

export interface IMainLayoutProps<
  PrismicNavigationType = NavigationDocument,
  PrismicFooterType = FooterDocument,
> extends PropsWithChildren {
  navigation?: PrismicNavigationType;
  footer?: PrismicFooterType;
  seo?: SeoDocument;
}
