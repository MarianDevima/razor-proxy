import { useState } from 'react';

import * as S from './styles';

import type { NavigationDocument } from '@/prismic';
import type { PropsWithClassName } from '@/types';

const Header = ({ data, className }: PropsWithClassName<NavigationDocument>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Wrapper className={className} as={'header'} role="heading">
      <S.Logo image={data.logoImage} link={data.logoLink} />
      <S.DesktopNavigation sliceElements={data.slices} />

      <S.DashboardLink link={data.dashboardLink}>Dashboard</S.DashboardLink>
      <S.MobileMenuButton onClick={() => setIsOpen(true)}>Drawer</S.MobileMenuButton>
      <S.MobileDrawer isOpen={isOpen} position="left" onClose={() => setIsOpen(false)}>
        <S.MobileNavigation sliceElements={data.slices} />
      </S.MobileDrawer>
    </S.Wrapper>
  );
};

export default Header;
