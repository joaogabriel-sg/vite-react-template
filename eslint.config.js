import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import perfectionist from "eslint-plugin-perfectionist";
import unicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";
import vitest from "@vitest/eslint-plugin";
import pluginQuery from "@tanstack/eslint-plugin-query";
import i18next from "eslint-plugin-i18next";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      unicorn,
      "@tanstack/query": pluginQuery,
      perfectionist,
      i18next,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...unicorn.configs.recommended.rules,
      ...pluginQuery.configs.recommended.rules,
      ...perfectionist.configs["recommended-natural"].rules,
      ...i18next.configs["flat/recommended"].rules,
      ...jsxA11y.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "unicorn/custom-error-definition": "error",
      "unicorn/empty-brace-spaces": "error",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-console-spaces": "error",
      "unicorn/no-null": "off",
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            db: false,
            arg: false,
            args: false,
            env: false,
            fn: false,
            func: {
              fn: true,
              function: false,
            },
            prop: false,
            props: false,
            ref: false,
            refs: false,
          },
          ignore: ["semVer", "SemVer"],
        },
      ],
    },
  },
  {
    files: ["**/*.spec.{ts,tsx}"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
      parserOptions: {
        project: "tsconfig.app.json",
      },
    },
  },
  prettier,
);
