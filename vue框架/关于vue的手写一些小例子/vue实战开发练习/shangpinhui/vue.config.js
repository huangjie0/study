const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://139.198.152.148:8200/',
        // target: 'http://39.98.123.211',
        //配置是否可以跨域
        changeOrigin:true
      }
    }
  }
})