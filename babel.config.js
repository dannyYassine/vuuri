module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "babel-plugin-istanbul", {
      extension: ['.js', '.vue'],
      include: ['test/client/src/vuuri'],
      exclude: ['test/client/src/components/**/*.vue']
    }
    ]
  ]
}