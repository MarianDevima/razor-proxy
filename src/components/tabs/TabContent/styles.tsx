import styled from 'styled-components';

import { FlexBox } from '@/components';

import { transition } from '../styles';

import type { StyledWrapper } from './types';

export const Wrapper = styled(FlexBox)<StyledWrapper>(
  ({ active }) => ({
    position: 'absolute',
    height: '100%',
    transform: `translateY(${active === 0 ? 0 : active * -300})`,
    padding: 10,
    color: 'blue',
  }),
  () => transition,
);
