import { SliceZone } from '@prismicio/react';

import components from '@/prismic';
import { getFullSinglePage } from '@/utils';

import type { BlogDocument } from '@/prismic';
import type { IPage } from '@/types';
import type { GetStaticProps } from 'next/types';

const Blog = ({ page }: IPage<BlogDocument>) => {
  //   return <SliceZone slices={page.data.slices} components={components} />;
  return <div>{page.data.text}</div>;
};

export default Blog;

export const getStaticProps: GetStaticProps = async ({ previewData, locale }) => {
  const page = await getFullSinglePage('blog', { previewData }, { lang: locale });

  return {
    props: {
      ...page,
    },
  };
};
