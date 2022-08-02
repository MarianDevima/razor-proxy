import { SliceZone } from '@prismicio/react';

import { Box, FlexBox } from '@/components';
import components from '@/prismic';

import type { IHeaderProps } from './types';

const Header = ({ navigation, ...props }: IHeaderProps) => {
  return (
    <Box as={'header'} {...props} role="heading">
      <FlexBox as={'nav'} role="navigation">
        <SliceZone components={components} slices={navigation.data.slices} />
      </FlexBox>
    </Box>
  );
};

export default Header;
