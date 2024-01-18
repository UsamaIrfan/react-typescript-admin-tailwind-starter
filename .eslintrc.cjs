module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "simple-import-sort", "unused-imports"],
  rules: {

    "no-unused-vars": "off",
    "no-console": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "react/display-name": "off",

    //#region  //*=========== Unused Import ===========
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    //#endregion  //*======== Unused Import ===========

    //#region  //*=========== Import Sort ===========
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          // ext library & side effect imports
          ["^@?\\w", "^\\u0000"],
          // {s}css files
          ["^.+\\.s?css$"],
          // Lib and hooks
          ["^@lib", "^@hooks"],
          // static data
          ["^@data"],
          // components
          ["^@components", "^@container"],
          // zustand store
          ["^@store"],
          // Other imports
          ["^@"],
          // relative paths up until 3 level
          [
            "^\\./?$",
            "^\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\.\\.(?!/?$)",
            "^\\.\\./\\.\\./?$",
            "^\\.\\./\\.\\.(?!/?$)",
            "^\\.\\./\\.\\./\\.\\./?$",
            "^\\.\\./\\.\\./\\.\\.(?!/?$)",
          ],
          ["^@types"],
          // other that didnt fit in
          ["^"],
        ],
      },
    ],
    //#endregion  //*======== Import Sort ===========

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
