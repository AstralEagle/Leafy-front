module.exports =  {
    parser:  '@typescript-eslint/parser',
    parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    ecmaFeatures:  {
      jsx: true,
    },
    },
    rules:  {},
    settings:  {
      react:  {
        version:  'detect',
      },
    },
};