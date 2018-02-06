module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'FastBgImage',
      externals: {
        react: 'React'
      }
    }
  }
}
