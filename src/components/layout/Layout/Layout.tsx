import dynamic from 'next/dynamic';

import { Layout as LayoutTypes } from '@/types';

import type { ILayoutProps } from './types';

const MainLayout = dynamic(() => import('@/components/layout/MainLayout'));

const layoutMap = {
  [LayoutTypes.Main]: MainLayout,
};

const Layout = ({ children, layoutType = LayoutTypes.Main, ...layoutProps }: ILayoutProps) => {
  const LayoutComponent = layoutMap[layoutType];
  return <LayoutComponent {...layoutProps}>{children}</LayoutComponent>;
};

export default Layout;
