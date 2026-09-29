// 定义获取首页分类头部数据的 API 函数
import httpInstance from "@/utils/http";

export function getCategoryAPI(){
    return httpInstance({
        // 请求地址
        url: '/home/category/head'  
        // 没写 method 时 axios 默认 GET
    })
}