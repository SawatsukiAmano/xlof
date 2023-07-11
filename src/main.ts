import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import i18n from "@plugins/i18n/i18n.ts"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from "@/router";

const pinia = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(ElementPlus)
app.use(pinia)
app.use(i18n);
app.use(router);
app.mount('#app')
