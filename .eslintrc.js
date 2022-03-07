module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // vue/recommended 설정
  extends: ["plugin:vue/recommended", "airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue", "prettier", "import"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "import/no-unresolved": "off",

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "always",
        jsx: "never",
        ts: "never",
        tsx: "never",
        vue: "always",
      },
    ],
  },
};
