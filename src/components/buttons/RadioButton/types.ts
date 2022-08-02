import type { PropsWithChildren } from 'react';

export interface IRadioButtonProps extends PropsWithChildren<IUseRadioButton> {
  name?: string;
  checked?: boolean;
  hiddenRadio?: boolean;
  value?: string;
  className?: string;
}

export interface IUseRadioButton {
  onClick?: (value: string) => void;
}

export interface IStyledWrapper {
  checked?: boolean;
}
