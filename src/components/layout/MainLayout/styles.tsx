import styled from 'styled-components';

import { Box } from '@/components/box';

import Footer from '../Footer';
import Header from '../Header';

export const StyledHeader = styled(Header)({
  padding: '15px 25px',
});

export const MainContent = styled(Box)({
  padding: 30,
  overflow: 'auto',
});

export const StyledFooter = styled(Footer)({
  padding: '15px 25px',
});
