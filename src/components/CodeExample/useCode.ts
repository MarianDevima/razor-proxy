import { useEffect, useRef, useState } from 'react';

import { getHighlightedCodeExample } from '@/utils';

import type { IUseCode } from './types';

const useCodeExample = ({ language, ...templateProps }: IUseCode) => {
  const codeRef = useRef<HTMLElement>(null);
  const [codeExample, setCodeExample] = useState('');

  useEffect(() => {
    const renderedTemplate = getHighlightedCodeExample(language, codeRef, templateProps);

    setCodeExample(renderedTemplate);
  }, [language, templateProps]);

  return { codeRef, codeExample };
};

export default useCodeExample;
