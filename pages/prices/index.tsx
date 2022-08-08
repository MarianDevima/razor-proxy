import { SliceZone } from '@prismicio/react';

import components from '@/prismic';
import { getFullSinglePage } from '@/utils';

import type { PricesDocument } from '@/prismic';
import type { GetStaticProps } from 'next/types';

const Prices = ({ page }: { page: PricesDocument }) => {
  //return <SliceZone slices={page.data.slices} components={components} />;
  return <div>{page.data.text}</div>;
};

export default Prices;

export const getStaticProps: GetStaticProps = async ({ previewData, locale }) => {
  const page = await getFullSinglePage('prices', { previewData }, { lang: locale });

  return {
    props: {
      ...page,
    },
  };
};
