import styled from 'styled-components';

import { sinceTablet } from '@/utils';

import { FlexBox } from '../box';

export const Wrapper = styled(FlexBox)(
  {
    flexDirection: 'column',
  },
  sinceTablet(() => ({
    flexDirection: 'row',
  })),
);
