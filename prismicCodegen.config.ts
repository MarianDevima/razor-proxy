import type { Config } from 'prismic-ts-codegen';

const config: Config = {
  output: './src/prismic/types.generated.ts',
  models: ['./customtypes/**/index.json', './src/prismic/slices/**/model.json'],
};

export default config;
