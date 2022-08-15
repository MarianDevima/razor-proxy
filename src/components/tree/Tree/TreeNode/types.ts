import type { ReactNode } from 'react';

export interface ITreeNodeProps extends ITreeStructure {
  depth: number;
  hasTriangle?: IStyledNode['hasTriangle'];
}

export interface ITreeStructure {
  children?: ReactNode;
  nodes?: ITreeStructure[];
}

export interface IStyledNode extends IStyledWrapper {
  isOpen?: boolean;
}

export interface IStyledWrapper {
  hasTriangle?: boolean;
  hasNested?: boolean;
}
