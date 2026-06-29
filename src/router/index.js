import KinoZone from '@/views/KinoZone.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/register', name: 'Register', component: Register },
  { path: '/KinoZone', name: 'KinoZone', component: KinoZone}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
