import type { NavigationDocument } from '@/prismic';

export interface IPage<PrismicDocumentType> {
  page: PrismicDocumentType;
}

export interface IPageWithNavigation<
  PrismicDocumentType,
  PrismicNavigationType = NavigationDocument,
> extends IPage<PrismicDocumentType> {
  navigation: PrismicNavigationType;
}
