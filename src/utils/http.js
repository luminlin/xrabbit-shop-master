// axios基础的封装
import axios from "axios";

// 创建axios实例
const httpInstance = axios.create ({
    // 根域名(基地址)
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器：在请求真正发送出去之前拦截请求，可以对请求配置做修改
httpInstance.interceptors.request.use(config => {
    // 请求配置对象 config 有效时执行
    return config;
}, e => Promise.reject(e));// 失败回调：请求配置出错时执行


// axios响应式拦截器：在服务器响应返回后、业务代码拿到数据前拦截响应，可对响应做统一处理
// 成功回调：HTTP 状态码为 2xx 时触发。
httpInstance.interceptors.response.use(res => res.data, e => {
    // 失败回调：HTTP 状态码超出 2xx（如 404、500）或网络错误时触发
    return Promise.reject(e);
});


//导出实例
export default httpInstance
