import { SliceZone } from '@prismicio/react';

import components from '@/prismic';
import { getFullPageByUID, documentsToPaths } from '@/utils';
import { createClient } from 'prismicio';

import type { ProductDocument } from '@/prismic';
import type { GetStaticPaths, GetStaticProps } from 'next/types';

const Product = ({ page }: { page: ProductDocument }) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export default Product;

export const getStaticProps: GetStaticProps = async ({ params, previewData, locale }) => {
  const uid = params?.uid as string;

  const page = await getFullPageByUID(
    'product',
    uid,
    { previewData: previewData },
    { lang: locale },
  );

  return {
    props: {
      ...page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();
  const documents = await client.getAllByType('product');

  const paths = documentsToPaths(documents);

  return {
    paths: paths,
    fallback: false,
  };
};
