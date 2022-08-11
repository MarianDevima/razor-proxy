import styled from 'styled-components';

import AppLogo from '@/components/AppLogo';
import { FlexBox } from '@/components/box';
import { Button, ButtonLink } from '@/components/buttons';
import Drawer from '@/components/Drawer';
import Navigation from '@/components/Navigation';
import { sinceTablet } from '@/utils';
export const Wrapper = styled(FlexBox)({ alignItems: 'center', justifyContent: 'space-between' });

export const Logo = styled(AppLogo)({});

export const DesktopNavigation = styled(Navigation)(
  {
    display: 'none',
  },
  sinceTablet(() => ({
    display: 'flex',
  })),
);

export const DashboardLink = styled(ButtonLink)(
  { display: 'none' },
  sinceTablet(() => ({
    marginLeft: 'auto',
    display: 'block',
  })),
);

export const MobileMenuButton = styled(Button)(sinceTablet(() => ({ display: 'none' })));
export const MobileDrawer = styled(Drawer)(sinceTablet(() => ({ display: 'none' })));
export const MobileNavigation = styled(Navigation)({ color: 'black' });
