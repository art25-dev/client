import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/styles/fonts.scss";
import moment from 'moment'
moment.locale('ru');  

import Icon from '@/components/Icon';

const app = createApp(App)

app.config.globalProperties.$moment = moment
app.component('icon', Icon)
app.use(store)
app.use(router)

app.mount('#app')

