import axios from 'axios'
import qs from 'qs'
import router from '@/router'

const http = axios.create({
    baseURL: '/proxyapi', // 基础路径
    timeout: 3000,        // 超时时间
    headers: {            // 自定义的header
        t: new Date().getTime()
    }
})

// 请求拦截器
http.interceptors.request.use((options) => {
    if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        options.data = qs.stringify(options.data)
    }
    options.headers['token'] = localStorage.getItem('token')
    return options
})

// 响应拦截器
http.interceptors.response.use((response) =>{
    if (response.data.code === 401) {
        console.log(response)
        router.replace('/login')
        localStorage.removeItem('token')
    }
    return response
})

export default http