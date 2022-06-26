const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: true,
      port: 30000,
      host: 'localhost'
    },
    // 自定义的文件引入路径
    resolve: {
      alias: {
        '#': path.join(__dirname, 'src/components')
      }
    }
  },
  lintOnSave:false
})