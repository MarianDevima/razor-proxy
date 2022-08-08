import { PrismicLink } from '@prismicio/react';

import { Button } from '@/components';

import type { IButtonLinkProps } from './types';

const ButtonLink = ({ children, link, className }: IButtonLinkProps) => {
  return (
    <PrismicLink className={className} field={link}>
      <Button>{children}</Button>
    </PrismicLink>
  );
};
export default ButtonLink;
