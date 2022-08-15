import { SliceZone } from '@prismicio/react';

import components from '@/prismic';
import { getFullSinglePage } from '@/utils';

import type { HomeDocument } from '@/prismic';
import type { IPage } from '@/types';
import type { GetStaticProps } from 'next/types';

const Home = ({ page }: IPage<HomeDocument>) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ previewData, locale }) => {
  const page = await getFullSinglePage('home', { previewData }, { lang: locale });

  return {
    props: page,
  };
};
