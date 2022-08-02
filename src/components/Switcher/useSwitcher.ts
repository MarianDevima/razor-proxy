import { useCallback } from 'react';

import type { IUseSwitcher } from './types';

const useSwitcher = ({ onChange }: IUseSwitcher) => {
  const selectOption = useCallback(
    (option: string) => {
      onChange?.(option);
    },
    [onChange],
  );

  return { selectOption };
};

export default useSwitcher;
