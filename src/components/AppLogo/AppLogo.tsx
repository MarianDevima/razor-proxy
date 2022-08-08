import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink } from '@prismicio/react';

import type { AppLogoProps } from './types';

const AppLogo = ({ image, link, className }: AppLogoProps) => {
  return (
    <PrismicLink field={link} className={className}>
      <PrismicNextImage field={image} />
    </PrismicLink>
  );
};

export default AppLogo;
