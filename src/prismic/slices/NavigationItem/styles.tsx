import styled from 'styled-components';

import { LinksDropdown } from '@/components/dropdowns';
import { NavLinkTree } from '@/components/tree';
import { sinceTablet } from '@/utils';

export const Dropdown = styled(LinksDropdown)(
  {
    display: 'none',
  },
  sinceTablet(() => ({
    display: 'block',
  })),
);

export const Tree = styled(NavLinkTree)(
  sinceTablet(() => ({
    display: 'none',
  })),
);
