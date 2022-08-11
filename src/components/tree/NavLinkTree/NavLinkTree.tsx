import { useCallback } from 'react';

import { Tree } from '@/components/tree';

import * as S from './styles';

import type { ILinksTree, ILinkTreeProps } from './types';
import type { PropsWithClassName } from '@/types';
const NavLinkTree = ({
  className,
  link,
  label,
  nestedLinks,
}: PropsWithClassName<ILinkTreeProps>) => {
  const linkComponent = useCallback(
    ({ link: prismicLink, label: prismicLabel }: ILinksTree) => (
      <S.Link field={prismicLink}>{prismicLabel}</S.Link>
    ),
    [],
  );

  return (
    <Tree
      className={className}
      data={[
        {
          children: linkComponent({ label, link }),
          nodes: nestedLinks.map((props) => ({
            children: linkComponent(props),
          })),
        },
      ]}
    />
  );
};

export default NavLinkTree;
