// pages/api/revalidate.js

import * as prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';

import { documentsToPaths, envUtil } from '@/utils';
import { linkResolver } from 'prismicio';
import sm from 'sm.json';

import type { NextApiRequest, NextApiResponse } from 'next';

// Import your app's Link Resolver (if your app uses one)

/**
 * This API endpoint will be called by a Prismic webhook. The webhook
 * will send an object containing a list of added, updated, or deleted
 * documents. Pages for those documents will be rebuilt.
 *
 * The Prismic webhook must send the correct secret.
 */
const { prismicWebhookSecret } = envUtil.getEnv();
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
    const documents = await client.getAllByIDs(req.body.documents);
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