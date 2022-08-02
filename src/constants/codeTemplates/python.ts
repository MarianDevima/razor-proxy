import type { CodeExample, LanguageTemplate } from './types';

const pythonTemplate: CodeExample = () => `
@requires_authorization(roles=["ADMIN"])
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
`;

const python: LanguageTemplate = {
  parser: async () => (await import('highlight.js/lib/languages/python')).default,
  template: pythonTemplate,
};

export default python;
