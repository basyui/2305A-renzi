import Cookies from 'js-cookie'

// 设置cookie
const token="Authorization"

// 获取cookie/token
export const getToken=()=>{
	return Cookies.get(token)
}

// 设置cookie/token
export const setToken=(value)=>{
	return Cookies.set(token,value)
}

// 删除cookie/token
export const removeToken=()=>{
	return Cookies.remove(token)
}
