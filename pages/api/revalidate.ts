import * as prismic from '@prismicio/client';

import { globalPartDocuments } from '@/constants';
import { api, documentsToPaths, envUtil } from '@/utils';
import sm from 'sm.json';

import type { AllDocumentTypes } from '@/prismic/types.generated';
import type { ICustomTypeInfo } from '@/types';
import type { Client } from '@prismicio/client';
import type { NextApiRequest, NextApiResponse } from 'next';
const { prismicWebhookSecret, prismicCustomTypesApi, prismicRepositoryName } = envUtil.getEnv();

const getActiveCustomTypesForRevalidate = async () => {
  const customTypes = await api<ICustomTypeInfo[]>('https://customtypes.prismic.io/customtypes', {
    headers: {
      repository: prismicRepositoryName,
      Authorization: `Bearer ${prismicCustomTypesApi}`,
    },
  });

  return customTypes.filter(({ status, id }) => status && !globalPartDocuments.includes(id));
};

const getAllDocumentsForRevalidate = async (client: Client<AllDocumentTypes>) => {
  const activeCustomTypes = await getActiveCustomTypesForRevalidate();

  const result = await activeCustomTypes.reduce<Promise<AllDocumentTypes[]>>(
    async (documentsAcc, customDocument) => {
      const documents = await client.getAllByType(customDocument.id);

      const acc = await documentsAcc;
      acc.push(...documents);
      return documentsAcc;
    },
    Promise.resolve([]),
  );

  return result;
};

// Import your app's Link Resolver (if your app uses one)

/**
 * This API endpoint will be called by a Prismic webhook. The webhook
 * will send an object containing a list of added, updated, or deleted
 * documents. Pages for those documents will be rebuilt.
 *
 * The Prismic webhook must send the correct secret.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.body.type === 'api-update' && req.body.documents.length > 0) {
    // Check for secret to confirm this is a valid request
    if (req.body.secret !== prismicWebhookSecret) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // If you have a `createClient()` function defined elsewhere in
    // your app, use that instead
    const client = prismic.createClient(sm.apiEndpoint);

    // Get a list of URLs for any new, updated, or deleted documents
    let documents = await client.getAllByIDs(req.body.documents);

    if (documents.some(({ id }) => globalPartDocuments.includes(id))) {
      documents = await getAllDocumentsForRevalidate(client);
    }

    const urls = documentsToPaths(documents);

    try {
      // Revalidate the URLs for those documents
      await Promise.all(urls.map(async (url) => res.revalidate(url)));

      return res.json({ revalidated: true });
    } catch (err) {
      // If there was an error, Next.js will continue to show
      // the last successfully generated page
      return res.status(500).send('Error revalidating');
    }
  }

  // If the request's body is unknown, tell the requester
  return res.status(400).json({ message: 'Invalid body' });
}
