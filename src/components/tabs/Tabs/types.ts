export interface ITabsProps {
  tabs: string[];
  active: number;
  setActive: (index: number) => void;
}

export interface StyledTab {
  active?: boolean;
}
