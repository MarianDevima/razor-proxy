import { getFullPageByUID, documentsToPaths } from '@/utils';
import { createClient } from 'prismicio';

import type { ProxyUseCaseDocument } from '@/prismic';
import type { IPage } from '@/types';
import type { GetStaticPaths, GetStaticProps } from 'next/types';

const ProxyUseCase = ({ page }: IPage<ProxyUseCaseDocument>) => {
  return <div>{page.data.text}</div>;
};

export default ProxyUseCase;

export const getStaticProps: GetStaticProps = async ({ params, previewData, locale }) => {
  const uid = params?.uid as string;

  const page = await getFullPageByUID(
    'proxyUseCase',
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
  const documents = await client.getAllByType('proxyUseCase');

  const paths = documentsToPaths(documents);

  return {
    paths: paths,
    fallback: false,
  };
};
