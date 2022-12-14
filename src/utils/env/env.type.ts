export enum EnvMode {
  DEV_ENV = 'development',
  PROD_ENV = 'production',
  TEST_ENV = 'test',
}

export interface IEnv {
  appName: string;
  prismicWebhookSecret: string;
  prismicCustomTypesApi: string;
  prismicRepositoryName: string;
}
