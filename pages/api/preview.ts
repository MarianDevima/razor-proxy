import * as prismicNext from '@prismicio/next';

import { createClient, linkResolver } from 'prismicio';

import type { NextApiRequest, NextApiResponse } from 'next/types';

const Preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = createClient({ req });

  prismicNext.setPreviewData({ req, res });

  await prismicNext.redirectToPreviewURL({ req, res, client, linkResolver });
};
export default Preview;
