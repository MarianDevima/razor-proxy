import { SliceZone } from '@prismicio/react';

import components from '@/prismic';

import * as S from './styles';

import type { FooterDocument } from '@/prismic';
import type { PropsWithClassName } from '@/types';
const Footer = ({ data, className }: PropsWithClassName<FooterDocument>) => {
  return (
    <S.Wrapper className={className} as="footer">
      <SliceZone slices={data.slices} components={components} />{' '}
    </S.Wrapper>
  );
};

export default Footer;
