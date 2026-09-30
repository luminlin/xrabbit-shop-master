import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

// 通过pinia管理数据
export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    // 定义响应式数组，获取接口数据(state)
    const categoryList = ref([])
    // 声明异步函数，等接口返回后再处理数据(action)
    const getCategory = async () => {
        const res = await getCategoryAPI()
        console.log(res)
        categoryList.value = res.result
    }

    return {
        categoryList,
        getCategory
    }
})
