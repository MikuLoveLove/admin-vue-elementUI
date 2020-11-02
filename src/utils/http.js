// 封装请求函数

// import Vue from 'vue'
import axios from 'axios'

// 维护一个可取消请求的数组
let requestArr = []
// 取消数组中每一个请求
const clearRequest = () => {
    if (requestArr.length) {
        // 遍历数组 将每一个取消函数拿出执行
        requestArr.forEach(cancelFunc => {
            cancelFunc()
        })
        // 执行完毕 清除空数组
        requestArr = []
    }
}

// 请求拦截器 错误处理
axios.interceptors.request.use((config) => {
    return config
}, error => {
    return Promise.reject(error)
})
// 相应拦截 做错误处理
axios.interceptors.response.use((config) => {
    return config
}, error => {
    return Promise.reject(error)
})

const {cancelToken} = axios

// 创建cancelToken 和取消函数
const createCancelToken = () => {
    return new cancelToken((cancelFunc) => {
        requestArr.push(cancelFunc)
    })
}

export default {
    request(url, {method = 'get', params, cancel}) {
        return axios(url, {
            params,
            method,
            timeout: 15000,
            cancelToken: cancel ? createCancelToken() : null
        })
    },
    clearRequest
}