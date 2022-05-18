const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      // * 以/api开头的请求
      // ? request('/api/xxxx/xxx')
      '/api': {
        // * 目标地址
        target: 'http://49.235.98.65:3000',
        ws: true,
        // * 是否跨域
        changeOrigin: true,
        // * 路径重写
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
})
