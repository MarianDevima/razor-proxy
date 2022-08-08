import { forwardRef } from 'react';

import * as S from './styles';

import type { IDefaultDropdownProps } from './types';

const DefaultDropdown = forwardRef<HTMLDivElement, IDefaultDropdownProps>(function DefaultDropdown(
  { buttonChildren, children, openOnHover, triangle, open },
  ref,
) {
  return (
    <S.Wrapper openOnHover={openOnHover} ref={ref}>
      <S.DropdownItem>{buttonChildren}</S.DropdownItem>
      {!!children && (
        <>
          {triangle && <S.Triangle />}
          <S.Dropdown triangle={triangle} isVisible={open}>
            <S.DropdownContent>{children}</S.DropdownContent>
          </S.Dropdown>
        </>
      )}
    </S.Wrapper>
  );
});

export default DefaultDropdown;
