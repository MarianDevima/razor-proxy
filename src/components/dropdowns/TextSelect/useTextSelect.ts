import { useState } from 'react';

import { useOutsideClick } from '@/hooks';

import type { ITextSelectOptions, IUseTextSelect } from './types';

const useTextSelect = ({ onSelect }: IUseTextSelect) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ref = useOutsideClick<HTMLDivElement>(handleClose);

  const handleChange = (option: ITextSelectOptions) => () => {
    onSelect?.(option);

    handleClose();
  };

  return { open, ref, handleOpen, handleChange };
};

export default useTextSelect;
