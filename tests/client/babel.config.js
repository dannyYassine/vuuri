module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "babel-plugin-istanbul", {
      extension: ['.js', '.vue'],
      include: ['src/vuuri'],
      exclude: ['src/components/**/*.vue']
    }
    ]
  ]
}