import { forwardRef } from 'react';

import * as S from './styles';

import type { IDefaultDropdownProps } from './types';

const DefaultDropdown = forwardRef<HTMLDivElement, IDefaultDropdownProps>(function DefaultDropdown(
  { buttonChildren, children, openOnHover, hasTriangle, isOpen, className },
  ref,
) {
  return (
    <S.Wrapper className={className} openOnHover={openOnHover} ref={ref}>
      <S.DropdownItem>{buttonChildren}</S.DropdownItem>
      {!!children && (
        <>
          {hasTriangle && <S.Triangle />}
          <S.Dropdown hasTriangle={hasTriangle} isVisible={isOpen}>
            <S.DropdownContent>{children}</S.DropdownContent>
          </S.Dropdown>
        </>
      )}
    </S.Wrapper>
  );
});

export default DefaultDropdown;
