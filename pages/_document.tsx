import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { envUtil } from '@/utils';

import type { DocumentContext, DocumentInitialProps } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
    const initialProps = await Document.getInitialProps(ctx);
    const styles = envUtil.isProdEnv() ? sheet.getStyleElement() : [];
    return {
      ...initialProps,
      styles: [initialProps.styles, ...styles],
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
