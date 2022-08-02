import { PrismicRichText } from '@prismicio/react';
import React from 'react';

import type { CallToActionSlice } from '@/prismic/types.generated';
import type { SliceComponentProps } from '@prismicio/react';

const CallToAction = (props: SliceComponentProps<CallToActionSlice>) => {
  return (
    <div>
      test
      <PrismicRichText field={props.slice.primary.title} />
      <PrismicRichText field={props.slice.primary.description} />
    </div>
  );
};

export default CallToAction;
