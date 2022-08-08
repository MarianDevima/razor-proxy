import * as S from './styles';

import type { IMainLayoutProps } from './types';

const MainLayout = ({ children, navigation, footer }: IMainLayoutProps) => {
  return (
    <>
      {navigation && <S.StyledHeader {...navigation} />}
      <S.MainContent as={'main'}>{children}</S.MainContent>
      {footer && <S.StyledFooter {...footer} />}
    </>
  );
};

export default MainLayout;
