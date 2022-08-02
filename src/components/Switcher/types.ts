export interface ISwitcherProps extends IUseSwitcher {
  name?: string;
  options: ISwitcherOption[];
  value?: string;
}

export interface IUseSwitcher {
  onChange: (value: string) => void;
}

interface ISwitcherOption {
  value: string;
  label: string | null;
}
