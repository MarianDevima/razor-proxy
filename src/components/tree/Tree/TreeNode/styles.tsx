import styled from 'styled-components';

import { Box, FlexBox } from '@/components/box';

import type { IStyledNode, IStyledWrapper } from './types';

export const Wrapper = styled(Box)<IStyledWrapper>(
  ({ triangle, hasNested }) =>
    triangle && {
      marginLeft: triangle && hasNested ? 0 : 30,
    },
);
export const Node = styled(FlexBox)<IStyledNode>(
  {
    marginBottom: 15,
    alignItems: 'center',
    '& + .tree-nested': {
      marginLeft: 10,
    },
  },
  ({ isOpen, triangle }) =>
    triangle && {
      ':before': {
        content: '""',
        display: 'inline-block',
        width: 0,
        height: 0,
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderBottom: '10px solid #000',
        margin: '0 5px',
        clear: 'both',
        transform: `rotate(${isOpen ? '180deg' : '90deg'})`,
      },
    },
);
