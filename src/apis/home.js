import httpInstance from "@/utils/http";

// 定义获取首页banner轮播图数据的 API 函数
export function getBannerAPI(){
    return httpInstance({
        // 请求地址
        url: '/home/banner'  
        // 没写 method 时 axios 默认 GET
    })
}


/**
 * @description: 定义获取新鲜好物数据的 API 函数
 * @param {*}
 * @return {*}
 */
export const getFindNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}


/**
 * @description: 定义获取获取人气推荐数据的 API 函数
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    url:'/home/hot'
  })
}