import { SliceZone } from '@prismicio/react';

import components from '@/prismic';
import { getFullSinglePage } from '@/utils';

import type { ProxyUseCasesDocument } from '@/prismic';
import type { GetStaticProps } from 'next/types';

const ProxyUseCases = ({ page }: { page: ProxyUseCasesDocument }) => {
  //   return <SliceZone slices={page.data.slices} components={components} />;
  return <div>{page.data.text}</div>;
};

export default ProxyUseCases;

export const getStaticProps: GetStaticProps = async ({ previewData, locale }) => {
  const page = await getFullSinglePage('proxyUseCases', { previewData }, { lang: locale });

  return {
    props: {
      ...page,
    },
  };
};
