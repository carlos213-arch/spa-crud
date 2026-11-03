import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './style.css' // Opcional si usas Tailwind o CSS puro

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')