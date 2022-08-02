import { PrismicLink } from '@prismicio/react';
import React from 'react';

import { LinksDropdown } from '@/components';

import type { NavigationItemSlice } from '@/prismic';
import type { SliceComponentProps } from '@prismicio/react';

const NavigationItem = ({ slice }: SliceComponentProps<NavigationItemSlice>) => {
  return (
    <LinksDropdown
      options={slice.items.map(({ label, link }) => ({
        label,
        linkProps: { field: link },
      }))}
    >
      <PrismicLink field={slice.primary.link}>{slice.primary.label}</PrismicLink>
    </LinksDropdown>
  );
};

export default NavigationItem;
