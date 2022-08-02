import styled from 'styled-components';

import { Box } from '@/components/box';

import type { IStyledWrapper } from './types';

export const Wrapper = styled(Box)<IStyledWrapper>(({ checked, theme }) => ({
  background: checked ? theme.colors.accent : theme.colors.white,
}));

export const RadioInput = styled.input.attrs({ type: 'radio' }).withConfig({
  displayName: 'StyledRadioInput',
})(() => ({}));

export const RadioLabel = styled.label.withConfig({
  displayName: 'StyledRadioInputLabel',
})(() => ({}));
