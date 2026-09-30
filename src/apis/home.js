// 定义获取首页分类头部数据的 API 函数
import httpInstance from "@/utils/http";

export function getBannerAPI(){
    return httpInstance({
        // 请求地址
        url: '/home/banner'  
        // 没写 method 时 axios 默认 GET
    })
}