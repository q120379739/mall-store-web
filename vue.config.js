/*
 * @Description: 配置文件
 * @Author: hai-27
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-05 01:41:38
 */
module.exports = {
  publicPath: './',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        // target: 'http://localhost:3000/', // 本地后端地址
        target: 'http://172.16.33.160:2080/mall-portal/', // 线上后端地址
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}