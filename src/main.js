import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-3-socket.io'
import SocketIO from 'socket.io-client'
import "@/assets/styles/fonts.scss";
import moment from 'moment'
moment.locale('ru');  

import Icon from '@/components/Icon';



const app = createApp(App)

app.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  }
}))

app.config.globalProperties.$moment = moment
app.component('icon', Icon)
app.use(store)
app.use(router)

app.mount('#app')

