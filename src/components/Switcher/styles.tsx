import styled from 'styled-components';

import { FlexBox } from '@/components/box';
import { sinceDesktop } from '@/utils';

import { RadioButton as Radio } from '../buttons';

export const Wrapper = styled(FlexBox)({
  justifyContent: 'space-around',
  margin: 10,
});

export const RadioButton = styled(Radio)(
  {
    padding: '10px 20px',
  },
  sinceDesktop(({ theme }) => ({
    background: theme.colors.accent,
  })),
);
