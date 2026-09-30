import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 从一个单文件组件中导入根组件
import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

// app：vue的实例对象
// 在一个vue项目中，只有一个vue的实例对象
const app = createApp(App)


// app：根组件
// 在这中间写组件的注册
app.use(createPinia())
app.use(router)



// 挂载应用
app.mount('#app')
