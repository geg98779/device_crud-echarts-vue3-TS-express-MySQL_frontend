import axios from 'axios'

const instance = axios.create({
	baseURL:'http://127.0.0.1:3007',
	timeout: 6000,
	headers:{
		'Content-Type': 'application/x-www-form-urlencoded'
	}
})

//添加请求拦截器
instance.interceptors.request.use(function(config){
	//在发送请求之前做些什么
	return config
},function(error){
	//对请求错误做些什么
	return Promise.reject(error)
})

//添加响应拦截器
instance.interceptors.response.use(function(response){
	//对响应数据做些什么
	return response
},function(error){
	//对响应错误做些什么
	return Promise.reject(error)
})

export default instance