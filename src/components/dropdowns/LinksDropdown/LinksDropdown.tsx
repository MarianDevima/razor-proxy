import { PrismicLink } from '@prismicio/react';

import * as S from './styles';

import type { ILinksDropdownProps } from './types';

const LinksDropdown = ({ options, children }: ILinksDropdownProps) => (
  <S.Wrapper>
    <S.StyledLink>{children}</S.StyledLink>
    <S.DropdownContentWrapper>
      <S.DropdownContent>
        {options.map(({ linkProps, label }, index) => (
          <S.StyledLink key={index}>
            <PrismicLink {...linkProps}>{label}</PrismicLink>
          </S.StyledLink>
        ))}
      </S.DropdownContent>
    </S.DropdownContentWrapper>
  </S.Wrapper>
);

export default LinksDropdown;
