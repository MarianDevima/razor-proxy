import type { ITreeNodeProps, ITreeStructure } from './TreeNode';
import type { PropsWithClassName } from '@/types';

export interface ITreeProps extends PropsWithClassName {
  data?: ITreeStructure[];
  depth?: number;
  hasTriangle?: ITreeNodeProps['hasTriangle'];
}
