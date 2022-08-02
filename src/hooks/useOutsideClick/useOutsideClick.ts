import { useCallback, useEffect, useRef } from 'react';

import { assertIsNode } from '@/utils/object/object.util';

import type { IUseOutsideClickCallback } from './types';

const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  callback: IUseOutsideClickCallback,
) => {
  const ref = useRef<T>(null);

  const handleClick = useCallback(
    ({ target }: MouseEvent) => {
      assertIsNode(target);

      if (ref?.current && !ref.current.contains(target)) {
        callback();
      }
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return ref;
};

export default useOutsideClick;
