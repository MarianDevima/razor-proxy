import type { NavigationDocument, SeoDocument } from '@/prismic';
import type { PropsWithChildren } from 'react';

//ToDo
export interface IMainLayoutProps<
  PrismicNavigationType = NavigationDocument,
  PrismicFooterType = {},
> extends PropsWithChildren {
  navigation?: PrismicNavigationType;
  footer?: PrismicFooterType;
  seo?: SeoDocument;
}
