import * as prismicH from '@prismicio/helpers';
import { SliceZone } from '@prismicio/react';

import components from '@/prismic';
import { getFullPageByUID } from '@/utils';
import { createClient, linkResolver } from 'prismicio';

import type { PageDocument } from '@/prismic';
import type { GetStaticPaths, GetStaticProps } from 'next/types';

const Product = ({ page }: { page: PageDocument }) => {
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

  const paths = documents.reduce<string[]>((acc, doc) => {
    const link = prismicH.asLink(doc, linkResolver);
    if (link) {
      acc.push(link);
    }
    return acc;
  }, []);

  console.log('log', { ...paths });

  return {
    paths: paths,
    fallback: false,
  };
};
