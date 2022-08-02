export type CodeExample = (languageTemplateProps: ILanguageTemplateProps) => string;
import type { LanguageFn } from 'highlight.js';

export interface ILanguageTemplateProps {
  location: string | null;
  proxyType: string | null;
}
export type LanguageParser = () => Promise<LanguageFn>;

export interface LanguageTemplate {
  template: CodeExample;
  parser: LanguageParser;
}
