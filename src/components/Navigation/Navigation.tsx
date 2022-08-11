import { SliceZone } from '@prismicio/react';

import components from '@/prismic';

import * as S from './styles';

import type { INavigationProps } from './types';

const Navigation = ({ sliceElements, className }: INavigationProps) => {
  return (
    <S.Wrapper as={'nav'} role="navigation" className={className}>
      <SliceZone components={components} slices={sliceElements} />
    </S.Wrapper>
  );
};

export default Navigation;
