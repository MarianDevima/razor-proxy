import { Box } from '@/components/box';

import useCodeExample from './useCode';

import 'highlight.js/styles/base16/google-dark.css';
import type { IUseCode } from './types';
import type { PropsWithClassName } from '@/types';

const CodeExample = ({
  className,
  language,
  ...languageTemplateProps
}: PropsWithClassName<IUseCode>) => {
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
