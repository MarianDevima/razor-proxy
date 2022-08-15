import { SliceZone } from '@prismicio/react';

import components from '@/prismic';
import { getFullSinglePage } from '@/utils';

import type { ProductsDocument } from '@/prismic';
import type { IPage } from '@/types';
import type { GetStaticProps } from 'next/types';

const Products = ({ page }: IPage<ProductsDocument>) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export default Products;

export const getStaticProps: GetStaticProps = async ({ previewData, locale }) => {
  const page = await getFullSinglePage('products', { previewData }, { lang: locale });

  return {
    props: page,
  };
};
