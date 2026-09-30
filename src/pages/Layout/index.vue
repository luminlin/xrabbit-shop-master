<template>
    <LayoutNav />
    <LayoutHeader />
    <LayoutFixed />
    <RouterView />
    <LayoutFooter />
</template>

<script setup>
    import LayoutNav from './components/LayoutNav.vue'
    import LayoutHeader from './components/LayoutHeader.vue'
    import LayoutFooter from './components/LayoutFooter.vue'
    import LayoutFixed from './components/LayoutFixed.vue';

    // 触发获取导航列表的action
    import { useCategoryStore } from '@/stores/category.js'
    import { onMounted } from 'vue';

    const categoryStore= useCategoryStore()

    // 在组件"挂载完成"这个时机，自动调用数据请求函数
    onMounted(() => {
        categoryStore.getCategory()
    })
</script>