import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/styles/fonts.scss";

import Icon from '@/components/Icon';

const app = createApp(App)

app.component('icon', Icon)
app.use(store)
app.use(router)
app.mount('#app')

