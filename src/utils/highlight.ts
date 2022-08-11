import { languagesTemplates } from '@/constants';

import { isSSR } from '.';

import type { Languages } from '@/constants';
import type { ILanguageTemplateProps, LanguageParser } from '@/constants/codeTemplates/types';
import type { HLJSApi } from 'highlight.js';
import type { RefObject } from 'react';

let hljs: HLJSApi | undefined = undefined;
let isInit = false;

const initHljs = async () => {
  if (isSSR()) {
    return;
  }

  hljs = (await import('highlight.js/lib/core')).default;
};

const registerLanguage = async (language: Languages, parser: LanguageParser) => {
  const isLanguageRegister = hljs?.getLanguage(language);
  if (isLanguageRegister) {
    return;
  }

  const hljsLanguage = await parser();

  hljs?.registerLanguage(language, hljsLanguage);
};

const highlight = async (
  codeRef: RefObject<HTMLElement>,
  language: Languages,
  parser: LanguageParser,
) => {
  const el = codeRef?.current;
  if (!el) {
    return;
  }

  if (!isInit) {
    isInit = true;
    await initHljs();
  }

  if (!hljs) {
    return;
  }

  await registerLanguage(language, parser);

  hljs.highlightElement(el);
};

export const getHighlightedCodeExample = (
  language: Languages,
  codeRef: RefObject<HTMLElement>,
  languageTemplateProps: ILanguageTemplateProps,
) => {
  const { template, parser } = languagesTemplates[language];
  highlight(codeRef, language, parser);
  return template(languageTemplateProps);
};
