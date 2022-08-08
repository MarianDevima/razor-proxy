import { PrismicLink } from '@prismicio/react';
import React from 'react';

import * as S from './styles';

import type { BlockLinksSlice } from '@/prismic/types.generated';
import type { SliceComponentProps } from '@prismicio/react';

const BlockLinks = ({ slice }: SliceComponentProps<BlockLinksSlice>) => (
  <S.Wrapper>
    <S.BlockName>{slice.primary.blockName}</S.BlockName>
    {slice.items.map(({ link, linkLabel }, index) => (
      <PrismicLink field={link} key={index}>
        {linkLabel}
      </PrismicLink>
    ))}
  </S.Wrapper>
);

export default BlockLinks;
