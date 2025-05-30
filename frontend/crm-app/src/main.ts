import { createApp } from 'vue'

import App from './App.vue'
import router from './routes/router.ts'
import pinia from './stores/initPinia.ts'

console.log('work')

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
