module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  "collectCoverageFrom": [
    "tests/unit/*.{js,jsx,vue}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  "resolver": null
};
