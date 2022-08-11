import type { ReactNode } from 'react';

export interface ITreeNodeProps extends ITreeStructure {
  depth: number;
  triangle?: IStyledNode['triangle'];
}

export interface ITreeStructure {
  children?: ReactNode;
  nodes?: ITreeStructure[];
}

export interface IStyledNode extends IStyledWrapper {
  isOpen?: boolean;
}

export interface IStyledWrapper {
  triangle?: boolean;
  hasNested?: boolean;
}
