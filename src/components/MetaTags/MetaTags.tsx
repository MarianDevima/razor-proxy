import Head from 'next/head';

import { envUtil } from '@/utils';

import type { IMetaTagsProps } from './type';

const MetaTags = (seo: IMetaTagsProps) => {
  const { appName } = envUtil.getEnv();

  return (
    <Head>
      <title>{seo?.title || appName}</title>
      {seo?.metaDescription ? <meta name="description" content={seo.metaDescription} /> : null}
      {seo?.indexing === false ? <meta name="robots" content="noindex, nofollow" /> : null}
      {seo?.ogTitle ? <meta name="og:title" content={seo.ogTitle} /> : null}
      {seo?.ogDescription ? <meta name="og:description" content={seo.ogDescription} /> : null}
      {seo?.ogImage?.url ? <meta name="og:image" content={seo.ogImage.url} /> : null}
      {seo?.ogImage?.dimensions?.width ? (
        <meta name="og:image:width" content={seo.ogImage.dimensions.width?.toString()} />
      ) : null}
      seo
      {seo?.ogImage?.dimensions?.height ? (
        <meta name="og:image:height" content={seo.ogImage.dimensions.height.toString()} />
      ) : null}
      {seo?.ogImage?.alt ? <meta name="og:image:alt" content={seo.ogImage.alt} /> : null}
      {seo?.ogSecureImage?.url ? (
        <meta name="og:image:secure_url" content={seo.ogSecureImage.url} />
      ) : null}
      {seo?.twitterCard ? <meta name="twitter:card" content={seo.twitterCard} /> : null}
      {seo?.twitterSite ? <meta name="twitter:site" content={seo.twitterSite} /> : null}
      {seo?.twitterCreator ? <meta name="twitter:creator" content={seo.twitterCreator} /> : null}
      {seo?.twitterImage?.dimensions?.width ? (
        <meta name="twitter:image:width" content={seo.twitterImage.dimensions.width.toString()} />
      ) : null}
      {seo?.twitterImage?.dimensions?.width ? (
        <meta name="twitter:image:height" content={seo.twitterImage.dimensions.height.toString()} />
      ) : null}
      {seo?.twitterImage?.alt ? (
        <meta name="twitter:image:alt" content={seo.twitterImage.alt} />
      ) : null}
      {seo?.twitterImage?.url ? <meta name="twitter:image" content={seo.twitterImage.url} /> : null}
      {seo?.twitterTitle ? <meta name="twitter:title" content={seo.twitterTitle} /> : null}
      {seo?.twitterDescription ? (
        <meta name="twitter:description" content={seo.twitterDescription} />
      ) : null}
      {seo?.fbAppId ? <meta name="fb:app_id" content={seo.fbAppId} /> : null}
    </Head>
  );
};

export default MetaTags;
