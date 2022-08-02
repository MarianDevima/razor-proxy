import styled from 'styled-components';

import { FlexBox, Button } from '@/components';

import type { StyledTab } from './types';

export const Wrapper = styled(FlexBox)({
  position: 'relative',
});

export const Tab = styled(Button)<StyledTab>(({ active, theme }) => ({
  flex: '1 1 33.33%',
  outline: 'none',
  height: 50,
  cursor: 'pointer',
  color: active ? theme.colors.primary : 'blue',
}));
