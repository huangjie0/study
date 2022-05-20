const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:1314',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':'/'
        }
      }
    }
  }
})
