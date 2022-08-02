import java from './java';
import javaScript from './javaScript';
import python from './python';

export enum Languages {
  JavaScript = 'javascript',
  Java = 'java',
  Python = 'python',
}

export const languagesTemplates = {
  [Languages.JavaScript]: javaScript,
  [Languages.Java]: java,
  [Languages.Python]: python,
} as const;
