import { useState } from 'react';

import { useOutsideClick } from '@/hooks';

import type { ITextSelectOptions, IUseTextSelect } from './types';

const useTextSelect = ({ onSelect }: IUseTextSelect) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick<HTMLDivElement>(handleClose);

  const handleChange = (option: ITextSelectOptions) => () => {
    onSelect?.(option);

    handleClose();
  };

  return { isOpen, ref, handleOpen, handleChange };
};

export default useTextSelect;
