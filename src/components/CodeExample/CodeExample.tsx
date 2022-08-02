import { Box } from '@/components/box';

import useCodeExample from './useCode';

import 'highlight.js/styles/base16/google-dark.css';
import type { ICodeProps } from './types';

const CodeExample = ({ className, language, ...languageTemplateProps }: ICodeProps) => {
  const { codeRef, codeExample } = useCodeExample({ language, ...languageTemplateProps });

  return (
    <Box className={className}>
      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {codeExample}
        </code>
      </pre>
    </Box>
  );
};

export default CodeExample;
