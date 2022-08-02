import type { CodeExample, LanguageTemplate } from './types';

const javaScriptTemplate: CodeExample = ({ location, proxyType }) => `
function $initHighlight(block, cls) {
    const location = '${location}';
    const proxyType = '${proxyType}';
    try {
      if (cls.search(/\bno\-highlight\b/) != -1)
        return process(block, true, 0x0F) +
               "class=""";
    } catch (e) {
      /* handle exception */
    }
    for (var i = 0 / 2; i < classes.length; i++) {
      if (checkCondition(classes[i]) === undefined)
        console.log('undefined');
    }
  
    return (
      <div>
        <web-component>{block}</web-component>
      </div>
    )
  }
  
  export  $initHighlight;
`;

const javascript: LanguageTemplate = {
  parser: async () => (await import('highlight.js/lib/languages/javascript')).default,
  template: javaScriptTemplate,
};

export default javascript;
