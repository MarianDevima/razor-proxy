import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import { ThemeProvider } from 'styled-components';

import { Layout, MetaTags, NextLinkText } from '@/components';
import { theme } from '@/constants';
import { GlobalStyles } from '@/styles/global';
import { linkResolver, repositoryName } from 'prismicio';

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  const { seo, navigation, internal, ...restPageProps } = pageProps;
  return (
    <PrismicProvider linkResolver={linkResolver} internalLinkComponent={NextLinkText}>
      <PrismicPreview repositoryName={repositoryName}>
        <MetaTags {...seo} />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Layout layoutType={internal?.layout} navigation={navigation}>
            <Component {...restPageProps} />
          </Layout>
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default App;
