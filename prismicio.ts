import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';

import sm from './sm.json';

import type { LinkResolverFunction } from '@prismicio/helpers';
import type { CreateClientConfig } from '@prismicio/next';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * The project's Prismic Link Resolver. This function determines the URL for a
 * given Prismic document.
 */
export const linkResolver: LinkResolverFunction = (doc) => {
  switch (doc.type) {
    case 'page':
      return '/';
    case 'products':
      return '/products';
    case 'product':
      return `/products/${doc.uid}`;
  }

  return '/';
};

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 */
export const createClient = (config: CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint);

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
