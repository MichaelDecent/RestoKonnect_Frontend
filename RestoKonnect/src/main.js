import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import router from "./routes/route.js"
const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
