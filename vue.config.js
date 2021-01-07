/*eslint-disable*/
const webpack = require('webpack')
const path = require('path')
/*eslint-enable*/
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
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
    ],
  },
  // productionSourceMap: false,
  parallel: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
}
