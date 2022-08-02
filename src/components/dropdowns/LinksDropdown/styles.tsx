import styled from 'styled-components';

import { Box } from '@/components/box';
import {
  Dropdown,
  DropdownItem,
  openDropdownCss,
  triangleCss,
} from '@/components/dropdowns/styles';

export const StyledLink = styled(DropdownItem)({
  border: '2px solid grey',
  borderRadius: 10,
});

export const DropdownContent = styled(Dropdown)(() => ({
  [StyledLink]: {
    margin: 10,
  },
}));

export const DropdownContentWrapper = styled(Box)(() => triangleCss, {
  visibility: 'hidden',
  position: 'relative',
});

export const Wrapper = styled(Box)(({}) => ({
  margin: '0 10px',

  ':hover': {
    [DropdownContentWrapper]: {
      visibility: 'visible',
    },
    [DropdownContent]: openDropdownCss,
  },
}));
