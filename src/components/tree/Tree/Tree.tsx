import * as S from './styles';
import TreeNode from './TreeNode';

import type { ITreeProps } from './types';
const Tree = ({ data, depth = 0, className, hasTriangle }: ITreeProps) => {
  if (!data?.length) {
    return null;
  }
  return (
    <S.Wrapper className={className}>
      {data.map((node, index) => (
        <TreeNode depth={depth} key={`${depth}-${index}`} hasTriangle={hasTriangle} {...node} />
      ))}
    </S.Wrapper>
  );
};

export default Tree;
