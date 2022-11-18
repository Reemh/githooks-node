module.exports = {
  extends: ["@commitlint/config-conventional"],

  parserPreset: {
    parserOpts: {
      issuePrefixes: ["ABC-", "#"],
    },
  },

  rules: {
    // check the issuePrefixes defined in ParserOpts
    "references-empty": [2, "never"],
  },
};
