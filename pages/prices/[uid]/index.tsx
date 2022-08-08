import { SliceZone } from '@prismicio/react';

import components from '@/prismic';
import { getFullPageByUID, documentsToPaths } from '@/utils';
import { createClient } from 'prismicio';

import type { PriceDocument } from '@/prismic';
import type { GetStaticPaths, GetStaticProps } from 'next/types';

const Price = ({ page }: { page: PriceDocument }) => {
  // return <SliceZone slices={page.data.slices} components={components} />;
  return <div>{page.data.text}</div>;
};

export default Price;

export const getStaticProps: GetStaticProps = async ({ params, previewData, locale }) => {
  const uid = params?.uid as string;

  const page = await getFullPageByUID('price', uid, { previewData: previewData }, { lang: locale });

  return {
    props: {
      ...page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();
  const documents = await client.getAllByType('price');

  const paths = documentsToPaths(documents);

  return {
    paths: paths,
    fallback: false,
  };
};
