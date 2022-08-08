import React from 'react';

import { AppLogo, ButtonLink } from '@/components';

import * as S from './styled';

import type { LogoWithActionButtonSlice } from '@/prismic/types.generated';
import type { SliceComponentProps } from '@prismicio/react';

const LogoWithActionButton = ({ slice }: SliceComponentProps<LogoWithActionButtonSlice>) => (
  <S.Wrapper>
    <AppLogo link={slice.primary.logoLink} image={slice.primary.logoImage} />
    <ButtonLink link={slice.primary.actionLink}>{slice.primary.actionLabel}</ButtonLink>
  </S.Wrapper>
);

export default LogoWithActionButton;
