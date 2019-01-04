import axios from 'axios'
import qs from 'qs'

const http = axios.create({
    baseURL: '/proxyapi', // 基础路径
    timeout: 3000,        // 超时时间
    headers: {            // 自定义的header
        token: localStorage.getItem('token'),
        t: new Date().getTime()
    }
})

// 请求拦截器
http.interceptors.request.use((options) => {
    if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        options.data = qs.stringify(options.data)
    }
    return options
})

// 响应拦截器
http.interceptors.response.use((response) =>{
    return response
})

export default http