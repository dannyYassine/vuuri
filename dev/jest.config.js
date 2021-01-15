module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  "collectCoverageFrom": [
    "src/*.{js,jsx,vue}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
};
