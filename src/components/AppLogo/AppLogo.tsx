import Image from 'next/image';

import logoSvg from '@/public/logo.svg';
import { envUtil } from '@/utils';

import type { AppLogoProps } from './types';

const { appName } = envUtil.getEnv();

const AppLogo = ({ alt, ...props }: AppLogoProps) => {
  return <Image src={logoSvg} layout="fill" alt={alt || appName} {...props} />;
};

export default AppLogo;
