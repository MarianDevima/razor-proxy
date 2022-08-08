import { PrismicLink } from '@prismicio/react';

import DefaultDropdown from '../DefaultDropdown/DefaultDropdown';

import * as S from './styled';

import type { ILinksDropdownProps } from './types';

const LinksDropdown = ({ options, children }: ILinksDropdownProps) => (
  <DefaultDropdown buttonChildren={children} openOnHover triangle>
    {!!options.length &&
      options.map(({ linkProps, label }, index) => (
        <S.LinkItem key={index}>
          <PrismicLink {...linkProps}>{label}</PrismicLink>
        </S.LinkItem>
      ))}
  </DefaultDropdown>
);

export default LinksDropdown;
