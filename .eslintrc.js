module.exports = {
    plugins: ['postcss'],
    rules: {
      'postcss/unknown-at-rules': [true, {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      }],
    },
  };
  