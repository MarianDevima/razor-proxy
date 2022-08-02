import type { IBoxProps } from '@/components/box/Box';
import type { NavigationDocument } from '@/prismic';

export interface IHeaderProps extends IBoxProps {
  navigation: NavigationDocument;
}
