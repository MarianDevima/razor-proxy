import { default as NextLink } from 'next/link';

import Link from '../Link';

import type { NextLinkTextProps } from './types';

export const NextLinkText = ({ href, linkProps, children, ...props }: NextLinkTextProps) => {
  return (
    <NextLink passHref {...linkProps} href={href}>
      <Link {...props}>{children}</Link>
    </NextLink>
  );
};

export default NextLinkText;
