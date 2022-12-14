import { EnvMode } from './env.type';

import type { IEnv } from './env.type';

const processEnvMode = process.env.NODE_ENV?.toLowerCase() as EnvMode;
const envMode = Object.values(EnvMode).includes(processEnvMode) ? processEnvMode : EnvMode.DEV_ENV;

const isEnv = (mode: EnvMode) => envMode.toLowerCase() === mode;

export const getEnvMode = () => envMode;

export const isDevEnv = () => isEnv(EnvMode.DEV_ENV);

export const isProdEnv = () => isEnv(EnvMode.PROD_ENV);

export const isTestEnv = () => isEnv(EnvMode.TEST_ENV);

const mapEnvValues = {
  number: (envValue: string, defaultValue: number) => {
    const value = Number(envValue);

    return Number.isNaN(value) ? defaultValue : value;
  },
};

const mapEnv = () => {
  const parsed: IEnv = {
    appName: process.env.NEXT_PUBLIC_APP_NAME || '',
    prismicWebhookSecret: process.env.PRISMIC_WEBHOOK_SECRET || '',
    prismicCustomTypesApi: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN || '',
    prismicRepositoryName: process.env.PRISMIC_REPOSITORY_NAME || '',
  };

  return Object.freeze(parsed);
};

let env: IEnv;
export const getEnv = (): Readonly<IEnv> => {
  if (!env) {
    env = mapEnv();
  }
  return env;
};
