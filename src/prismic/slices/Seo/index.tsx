import { StyledSeo } from './styles';

import type { SeoSlice } from '@/prismic/types.generated';
import type { SliceComponentProps } from '@prismicio/react';

const Seo = (props: SliceComponentProps<SeoSlice>) => <StyledSeo>SEO meta data</StyledSeo>;

export default Seo;
