import Tree from '../Tree';

import * as S from './styles';
import useTreeNode from './useTreeNode';

import type { ITreeNodeProps } from './types';
import type { PropsWithClassName } from '@/types';

const TreeNode = ({
  children,
  nodes,
  className,
  depth,
  triangle = true,
}: PropsWithClassName<ITreeNodeProps>) => {
  const { show, toggleShow } = useTreeNode();
  return (
    <S.Wrapper triangle={triangle} hasNested={!!nodes?.length} className={className}>
      <S.Node
        className="tree-node"
        onClick={toggleShow}
        isOpen={show}
        triangle={triangle && !!nodes?.length}
      >
        {children}
      </S.Node>
      {show && <Tree depth={depth + 1} className="tree-nested" data={nodes} />}
    </S.Wrapper>
  );
};

export default TreeNode;
