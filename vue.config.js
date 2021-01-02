module.exports = {
  chainWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
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
    }
  },
  // productionSourceMap: false,
  parallel: false,
}
