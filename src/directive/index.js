// Vue自定义指令
import Vue from 'vue'

const authorityList = JSON.parse(localStorage.getItem('authorityList')) || []

// 权限校验
const Authority = (options = []) => {
    const result = options.find(item => {
        return authorityList.includes(item)
    })
    return !!result
}