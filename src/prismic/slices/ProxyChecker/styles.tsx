import styled from 'styled-components';

import { FlexBox, Box } from '@/components/box';

export const Wrapper = styled(FlexBox)(({ theme }) => ({
  background: theme.colors.white,
  color: theme.colors.black,
  borderRadius: 50,
  overflow: 'auto',
}));

export const TitleWrapper = styled(Box)({
  margin: '0 3rem',
});
