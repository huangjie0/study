const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
  proxy: {
    '/api': {
      target: 'http://49.235.98.65:3000',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
        },
      },
    },
  },
})
