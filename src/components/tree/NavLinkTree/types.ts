import type { LinkField } from '@prismicio/types';

export interface ILinkTreeProps {
  label: string | null;
  link: LinkField;
  nestedLinks: ILinksTree[];
}
export interface ILinksTree {
  label: string | null;
  link: LinkField;
}
