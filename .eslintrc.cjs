/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: { node: true },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', '@vue/eslint-config-prettier'],
  parserOptions: { ecmaVersion: 'latest' },
  rules: {
    'prettier/prettier': ['error'],
    'vue/multi-word-component-names': ['error', { ignores: ['index'] }],
    'vue/multiline-html-element-content-newline': ['error', { ignoreWhenEmpty: false }],
    'vue/html-closing-bracket-newline': ['error', { multiline: 'never' }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'never'
        }
      }
    ],
    'vue/no-v-html': 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: { indent: 'off' }
    }
  ]
}
