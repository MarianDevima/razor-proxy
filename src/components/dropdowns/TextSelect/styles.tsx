import styled from 'styled-components';

import { Box } from '@/components/box';
import { DropdownItem } from '@/components/dropdowns/DefaultDropdown';
export const Wrapper = styled(Box)({
  position: 'relative',
  margin: 0,
});
export const SelectLabelButton = styled.button({
  padding: '0.3rem 0.5rem',
  minWidth: '5rem',
  borderRadius: '10px',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid slategrey',
  cursor: 'pointer',
});

export const TextSelectItem = styled(DropdownItem)({});
