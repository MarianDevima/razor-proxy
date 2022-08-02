import { useCallback } from 'react';

import type { IUseRadioButton } from './types';
import type { ChangeEventHandler } from 'react';

const useRadioButton = ({ onClick }: IUseRadioButton) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ currentTarget }) => {
      onClick?.(currentTarget.value);
    },
    [onClick],
  );

  return { onChange };
};

export default useRadioButton;
