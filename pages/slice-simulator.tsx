import { SliceZone } from '@prismicio/react';
import { SliceSimulator } from '@prismicio/slice-simulator-react';

import components from '@/prismic';

import state from '../.slicemachine/libraries-state.json';

const SliceSimulatorPage = () => {
  return (
    <SliceSimulator
      sliceZone={({ slices }) => <SliceZone slices={slices} components={components} />}
      state={state}
    />
  );
};

export default SliceSimulatorPage;

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    return { notFound: true };
  } else {
    return { props: {} };
  }
};
