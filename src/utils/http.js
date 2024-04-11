import axios from "axios"
import { getToken, removeToken } from "./auth"
import router from "@/router"
import { MessageBox } from "element-ui"
const instance = axios.create({
  baseURL: "/",
  timeout: 36 * 1000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
})
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = "Bearer " + " " + getToken()
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    if (response.data.code === 10002 && response.status == 200) {
      router.push({
        path: "/login"
      })
      removeToken()
    }
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    let tilte = ""
    let message = error.message
    if (error.code) {
      switch (error.code) {
        case 401:
          tilte = "资源未授权"
          break
        case 400:
          tilte = "错误请求"
          break
        case 403:
          tilte = "禁止访问"
          break
        case 404:
          tilte = "未找到所请求的资源"
          break
        case 405:
          tilte = "不允许使用该方法"
          break
        case 408:
          tilte = "请求超时"
          break
        case 500:
          tilte = "内部服务器错误"
          break
        case 501:
          tilte = "未实现"
          break
        case 502:
          tilte = "网关错误"
          break
        case 503:
          tilte = "服务不可用"
          break
        case 504:
          tilte = "网关超时"
          break
        case 505:
          tilte = "HTTP版本不受支持"
          break
        default:
          tilte = error.response.status
          return MessageBox.alert(message, tilte, {
            type: "warning"
          })
      }
    } else {
      return MessageBox.alert("请联系系统管理员, 或稍后再试!", "未知错误", {
        type: "error"
      })
    }
  }
)

// 动态拼接代理标识
instance.adUrl = (url) => {
  return process.env.VUE_APP_BASE_API + url
}

export default instance
