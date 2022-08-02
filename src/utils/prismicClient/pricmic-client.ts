import { objectUtil } from '@/utils';
import { createClient } from 'prismicio';

import type { IDefaultParams, IDocumentTypes, IDocumentWithSeo } from './types';
import type { AllDocumentTypes } from '@/prismic';
import type { Client } from '@prismicio/client';
import type { CreateClientConfig } from '@prismicio/next';

const getPageParts = async (client: Client<AllDocumentTypes>, params?: IDefaultParams) => {
  const navigation = await client.getSingle('navigation', params);
  const footer = {};
  const seoDocument = await client.getSingle('seo', params);
  const [seo] = seoDocument.data.slices;
  return { navigation, footer, seo };
};
export const getFullPageByUID = async <T extends IDocumentTypes>(
  documentType: T,
  uid: string,
  config?: CreateClientConfig,
  params?: IDefaultParams,
) => {
  const client = createClient(config);

  const page = await client.getByUID(documentType, uid, params);

  const [pageSeo] = (page.data as IDocumentWithSeo).seo ?? [];

  const { seo: globalSeo, ...pageParts } = await getPageParts(client, params);

  const seo = objectUtil.mergeObject(globalSeo?.primary, pageSeo?.primary);
  return {
    page,
    seo,
    ...pageParts,
  };
};

export const getFullSinglePage = async <T extends IDocumentTypes>(
  documentType: T,
  config?: CreateClientConfig,
  params?: IDefaultParams,
) => {
  const client = createClient(config);

  const page = await client.getSingle(documentType, params);

  const [pageSeo] = (page.data as IDocumentWithSeo).seo ?? [];

  const { seo: globalSeo, ...pageParts } = await getPageParts(client, params);

  const seo = objectUtil.mergeObject(globalSeo?.primary, pageSeo?.primary);
  return {
    page,
    seo,
    ...pageParts,
  };
};
