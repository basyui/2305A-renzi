// 导入 defineConfig 函数，用于定义 Vue 项目的配置
const { defineConfig } = require("@vue/cli-service")
// 导入 path 模块，用于处理路径
const path = require("path")

// 定义 resolve 函数，用于解析路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

// 导出配置，用于 Vue 项目
module.exports = defineConfig({
  // 开启脚本编译
  transpileDependencies: true,
  // 关闭代码风格检查
  lintOnSave: false,
  // 路径设置
  publicPath: "/",
  // 输出目录
  outputDir: "dist",
  // 资源目录
  assetsDir: "assets",
  // 开发服务器配置
  devServer: {
    // 端口设置
    port: "4090",
    // 是否开启开发服务器
		host: "0.0.0.0",
    open: false,
    // 是否使用HTTPS
    https: false,
    // 代理配置
    proxy: {
      // 代理路径
      // "/api": {
      //   // 是否允许跨域
      //   changeOrigin: true,
      //   // 目标服务器
      //   target: "https://www.baidu.com",
      //   // 路径重写
      //   pathRewrite: {
      //     "^/api": ""
      //   }
      // }
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: " "
        }
      }
    }
  },
  // 修改 Webpack 配置
  chainWebpack: (config) => {
    // 设置别名
    config.resolve.alias.set("@p", resolve("src"))
  }
})

// 导出配置
