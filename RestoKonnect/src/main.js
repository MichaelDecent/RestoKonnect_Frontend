import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "../src/routes/route.js"
const app = createApp(App)

app.use(router)

app.mount('#app')
