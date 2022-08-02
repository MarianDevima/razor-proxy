import { Box } from '@/components';

import * as S from './styles';

import type { IMainLayoutProps } from './types';

const MainLayout = ({ children, navigation }: IMainLayoutProps) => {
  return (
    <Box>
      {navigation && <S.StyledHeader navigation={navigation} />}

      <S.MainContent as={'main'}>{children}</S.MainContent>
    </Box>
  );
};

export default MainLayout;
