const path = require('path')

module.exports = {
  // 配置方式一
  outputDir: './build',
  // publicPath: './'
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 配置方式二
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 配置方式三
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('components', '@/components')
  // }
}
