import { SliceZone } from '@prismicio/react';

import { FlexBox } from '@/components';
import components from '@/prismic';

import * as S from './styles';

import type { NavigationDocument } from '@/prismic';
import type { PropsWithClassName } from '@/types';

const Header = ({ data, className }: PropsWithClassName<NavigationDocument>) => {
  return (
    <S.Wrapper className={className} as={'header'} role="heading">
      <S.Logo image={data.logoImage} link={data.logoLink} />
      <FlexBox as={'nav'} role="navigation">
        <SliceZone components={components} slices={data.slices} />
      </FlexBox>

      <S.DashboardLink link={data.dashboardLink}>Dashboard</S.DashboardLink>
    </S.Wrapper>
  );
};

export default Header;
