import styled from 'styled-components';

import AppLogo from '@/components/AppLogo';
import { FlexBox } from '@/components/box';
import { ButtonLink } from '@/components/buttons';
export const Wrapper = styled(FlexBox)({
  alignItems: 'center',
});

export const Logo = styled(AppLogo)({});

export const DashboardLink = styled(ButtonLink)({
  marginLeft: 'auto',
});
