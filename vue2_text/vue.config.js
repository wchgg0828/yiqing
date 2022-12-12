/*
 * @Autor: wencaihao
 * @Date: 2022-12-11 12:50:51
 * @LastEditors: wencaihao
 * @LastEditTime: 2022-12-11 12:59:50
 * @aim: 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer:{
    proxy:{
      '/api':{
        target: 'https://api.xiao-xin.top',
        changeOrigin: true,
        pathRewrite: { // pathRewrite 重写路径
            "^/api": ""
        }
      },
      '/juhe':{
        target: 'http://apis.juhe.cn',
        changeOrigin: true,
        pathRewrite: { // pathRewrite 重写路径
            "^/juhe": ""
        }
      }
    }
  }
};