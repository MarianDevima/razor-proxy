import type { Languages } from '@/constants';
import type { ILanguageTemplateProps } from '@/constants/codeTemplates/types';

export interface ICodeProps extends IUseCode {
  className?: string;
}

export interface IUseCode extends ILanguageTemplateProps {
  language: Languages;
}
