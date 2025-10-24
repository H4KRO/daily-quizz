import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/HomeView.vue'),
    },
  ],
  history: createWebHistory(),
})

app.use(router)
app.use(ui)

app.mount('#app')
