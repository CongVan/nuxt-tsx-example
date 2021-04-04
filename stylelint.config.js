module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'if',
          'include',
          'function',
          'else',
          'return',
          'mixin',
          'each',
          'text-fill-color',
        ],
      },
    ],
    'block-no-empty': null,
    'no-empty-source': null,
    'unit-whitelist': ['em', 'rem', '%', 'px', 'vh', 'vw', 'deg', 's'],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'max-nesting-depth': 4,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['user-drag', 'font-smooth'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
}
