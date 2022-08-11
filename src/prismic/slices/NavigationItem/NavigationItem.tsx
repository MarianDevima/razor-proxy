import { PrismicLink } from '@prismicio/react';
import React from 'react';

import * as S from './styles';

import type { NavigationItemSlice } from '@/prismic';
import type { SliceComponentProps } from '@prismicio/react';

const NavigationItem = ({ slice }: SliceComponentProps<NavigationItemSlice>) => {
  const label = <PrismicLink field={slice.primary.link}>{slice.primary.label}</PrismicLink>;
  return (
    <>
      <S.Dropdown options={slice.items}>{label}</S.Dropdown>
      <S.Tree
        label={slice.primary.label}
        link={slice.primary.link}
        nestedLinks={slice.items}
      ></S.Tree>
    </>
  );
};

export default NavigationItem;
