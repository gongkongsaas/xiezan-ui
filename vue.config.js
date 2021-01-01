module.exports = {
  chainWebpack(config) {
    config.module
      .rule('tsx')
      .use('ts-loader')
      .loader('ts-loader')
      .tap((opts) => {
        opts.transpileOnly = false
        opts.happyPackMode = false
        return opts
      })
    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap((opts) => {
        opts.transpileOnly = false
        opts.happyPackMode = false
        return opts
      })
  },
  // productionSourceMap: false,
  parallel: false,
}
