// stylelint.config.js

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-a11y/recommended',
  ],
  plugins: [
    'stylelint-a11y',
    'stylelint-scss',
  ],
  rules: {
    'indentation': 2,
    'color-hex-case': 'upper',
    'length-zero-no-unit': null,
    'color-no-invalid-hex': true,
    'a11y/media-prefers-reduced-motion': true,
    'a11y/no-outline-none': true,
    'a11y/selector-pseudo-class-focus': true,
    'unit-allowed-list': ["em", "rem", "s"],
    'block-no-empty': null,
  },
};
