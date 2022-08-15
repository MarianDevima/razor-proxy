import { Tree } from '@/components';

import * as S from './styles';
import useTreeNode from './useTreeNode';

import type { ITreeNodeProps } from './types';
import type { PropsWithClassName } from '@/types';

const TreeNode = ({
  children,
  nodes,
  className,
  depth,
  hasTriangle = true,
}: PropsWithClassName<ITreeNodeProps>) => {
  const { show, toggleShow } = useTreeNode();
  return (
    <S.Wrapper hasTriangle={hasTriangle} hasNested={!!nodes?.length} className={className}>
      <S.Node
        className="tree-node"
        onClick={toggleShow}
        isOpen={show}
        hasTriangle={hasTriangle && !!nodes?.length}
      >
        {children}
      </S.Node>
      {show && <Tree depth={depth + 1} className="tree-nested" data={nodes} />}
    </S.Wrapper>
  );
};

export default TreeNode;
