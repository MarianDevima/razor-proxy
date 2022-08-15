import { getFullSinglePage } from '@/utils';

import type { PricesDocument } from '@/prismic';
import type { IPage } from '@/types';
import type { GetStaticProps } from 'next/types';

const Prices = ({ page }: IPage<PricesDocument>) => {
  return <div>{page.data.text}</div>;
};

export default Prices;

export const getStaticProps: GetStaticProps = async ({ previewData, locale }) => {
  const page = await getFullSinglePage('prices', { previewData }, { lang: locale });

  return {
    props: page,
  };
};
