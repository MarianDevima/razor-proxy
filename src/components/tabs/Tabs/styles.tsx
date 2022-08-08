import styled from 'styled-components';

import { FlexBox } from '@/components';
import { Button } from '@/components/buttons';

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
