module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:react-hooks/recommended'
  ],
  'env': {
    'browser': true,
    'commonjs': true,
    'node': true,
    'es6': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2018,
    'ecmaFeatures': {
      'jsx': true
    },
    'sourceType': 'module'
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'version': '17.0.2'
    }
  },
  'plugins': [
    'react-hooks'
  ],
  'rules': {
    // 'no-undef': 0,
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    // 'react-hooks/exhaustive-deps': ['warn', {
    //   'additionalHooks': '(useMyCustomHook|useMyOtherCustomHook)'
    // }],
    'semi': 0,
    'default-case': [
      'error',
      {
        'commentPattern': '^no default$'
      }
    ],
    'react/jsx-uses-vars': 0,
    'react/react-in-jsx-scope': 0,
    'no-new-wrappers': 0,
    'no-mixed-operators': 0,
    'require-atomic-updates': 'off',
    'comma-dangle': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 0,
    'react/no-unescaped-entities': 0,
    'react/display-name': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-useless-escape': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-empty': 0,
    'linebreak-style': 0,
    'import/first': 0,
    'import/imports-first': 0,
    'no-shadow': 0,
    'disable-next-line': 0,
    'no-case-declarations': 0,
  }
}
