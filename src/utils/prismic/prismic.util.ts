import * as prismicH from '@prismicio/helpers';

import { linkResolver } from 'prismicio';

import type { AllDocumentTypes } from '@/prismic';

export const documentsToPaths = (documents: AllDocumentTypes[]) =>
  documents.reduce<string[]>((acc, doc) => {
    const link = prismicH.asLink(doc, linkResolver);
    if (link) {
      acc.push(link);
    }
    return acc;
  }, []);
