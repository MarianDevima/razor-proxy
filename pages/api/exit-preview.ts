import * as prismicNext from '@prismicio/next';

import type { NextApiRequest, NextApiResponse } from 'next/types';

const ExitPreview = async (req: NextApiRequest, res: NextApiResponse) => {
  prismicNext.exitPreview({ res, req });
};
export default ExitPreview;
