import type { AllDocumentTypes, SeoSlice } from '@/prismic';

export type IDocumentTypes = AllDocumentTypes['type'];

export interface IDocumentWithSeo {
  seo?: [SeoSlice];
}

export interface IDefaultParams {
  lang?: string;
}
