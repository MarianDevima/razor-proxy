import { getFullSinglePage } from '@/utils';

import type { ProxyUseCasesDocument } from '@/prismic';
import type { IPage } from '@/types';
import type { GetStaticProps } from 'next/types';

const ProxyUseCases = ({ page }: IPage<ProxyUseCasesDocument>) => {
  return <div>{page.data.text}</div>;
};

export default ProxyUseCases;

export const getStaticProps: GetStaticProps = async ({ previewData, locale }) => {
  const page = await getFullSinglePage('proxyUseCases', { previewData }, { lang: locale });

  return {
    props: page,
  };
};
