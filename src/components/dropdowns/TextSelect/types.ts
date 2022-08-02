import type { ILabel } from '@/components/dropdowns';
export interface ITextSelectProps extends IUseTextSelect {
  options: ITextSelectOptions[];
  value?: ITextSelectOptions;
}

export interface IUseTextSelect {
  onSelect?: (value: ITextSelectOptions) => void;
}

export interface ITextSelectOptions extends ILabel {
  value: string | null;
}
