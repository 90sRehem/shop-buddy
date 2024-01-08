module.exports = {
  root: true,
  env: { browser: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'turbo',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react-refresh', "jsx-a11y", "@typescript-eslint", "prettier"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "always",
        semi: true,
        endOfLine: "auto",
        importOrder: [
          "^(next/(.*)$)|^(next$)",
          "^(react/(.*)$)|^(react$)",
          "<THIRD_PARTY_MODULES>",
          "^~/(.*)$",
          "^[./]|^[..]",
        ],
        importOrderSeparation: false,
        importOrderSortSpecifiers: true,
        importOrderBuiltinModulesToTop: true,
        importOrderMergeDuplicateImports: true,
        importOrderCombineTypeAndValueImports: true,
        plugins: ["@ianvs/prettier-plugin-sort-imports"],
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
  },
}


