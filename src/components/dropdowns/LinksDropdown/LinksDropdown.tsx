import { PrismicLink } from '@prismicio/react';

import DefaultDropdown from '../DefaultDropdown/DefaultDropdown';

import * as S from './styled';

import type { ILinksDropdownProps } from './types';

const LinksDropdown = ({ options, children, className }: ILinksDropdownProps) => (
  <DefaultDropdown className={className} buttonChildren={children} openOnHover hasTriangle>
    {options.map(({ linkProps, label, link }, index) => (
      <S.LinkItem key={index}>
        <PrismicLink field={link} {...linkProps}>
          {label}
        </PrismicLink>
      </S.LinkItem>
    ))}
  </DefaultDropdown>
);

export default LinksDropdown;
