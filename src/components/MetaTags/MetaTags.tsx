import Head from 'next/head';

import { envUtil } from '@/utils';

import type { IMetaTagsProps } from './types';

const MetaTags = (seo: IMetaTagsProps) => {
  const { appName } = envUtil.getEnv();

  return (
    <Head>
      <title>{seo?.title || appName}</title>
      {seo?.metaDescription && <meta name="description" content={seo.metaDescription} />}
      {seo?.indexing === false && <meta name="robots" content="noindex, nofollow" />}
      {seo?.ogTitle && <meta name="og:title" content={seo.ogTitle} />}
      {seo?.ogDescription && <meta name="og:description" content={seo.ogDescription} />}
      {seo?.ogImage?.url && <meta name="og:image" content={seo.ogImage.url} />}
      {seo?.ogImage?.dimensions?.width && (
        <meta name="og:image:width" content={seo.ogImage.dimensions.width?.toString()} />
      )}
      seo
      {seo?.ogImage?.dimensions?.height && (
        <meta name="og:image:height" content={seo.ogImage.dimensions.height.toString()} />
      )}
      {seo?.ogImage?.alt && <meta name="og:image:alt" content={seo.ogImage.alt} />}
      {seo?.ogSecureImage?.url && (
        <meta name="og:image:secure_url" content={seo.ogSecureImage.url} />
      )}
      {seo?.twitterCard && <meta name="twitter:card" content={seo.twitterCard} />}
      {seo?.twitterSite && <meta name="twitter:site" content={seo.twitterSite} />}
      {seo?.twitterCreator && <meta name="twitter:creator" content={seo.twitterCreator} />}
      {seo?.twitterImage?.dimensions?.width && (
        <meta name="twitter:image:width" content={seo.twitterImage.dimensions.width.toString()} />
      )}
      {seo?.twitterImage?.dimensions?.width && (
        <meta name="twitter:image:height" content={seo.twitterImage.dimensions.height.toString()} />
      )}
      {seo?.twitterImage?.alt && <meta name="twitter:image:alt" content={seo.twitterImage.alt} />}
      {seo?.twitterImage?.url && <meta name="twitter:image" content={seo.twitterImage.url} />}
      {seo?.twitterTitle && <meta name="twitter:title" content={seo.twitterTitle} />}
      {seo?.twitterDescription && (
        <meta name="twitter:description" content={seo.twitterDescription} />
      )}
      {seo?.fbAppId && <meta name="fb:app_id" content={seo.fbAppId} />}
    </Head>
  );
};

export default MetaTags;
