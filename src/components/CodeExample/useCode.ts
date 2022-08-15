import { useEffect, useRef, useState } from 'react';

import { getHighlightedCodeExample } from '@/utils';

import type { IUseCode } from './types';
import type { PropsWithChildren } from 'react';

const useCodeExample = ({ language, ...templateProps }: PropsWithChildren<IUseCode>) => {
  const codeRef = useRef<HTMLElement>(null);
  const [codeExample, setCodeExample] = useState('');

  useEffect(() => {
    const renderedTemplate = getHighlightedCodeExample(language, codeRef, templateProps);

    setCodeExample(renderedTemplate);
  }, [language, templateProps]);

  return { codeRef, codeExample };
};

export default useCodeExample;
