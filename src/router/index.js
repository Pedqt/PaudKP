import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import GuruDashboard from '../pages/GuruDashboard.vue'
import OrangTuaDashboard from '../pages/OrangTuaDashboard.vue'
import { requireGuru, requireOrangTua, redirectIfLoggedIn } from '../utils/routeGuard.js'

const routes = [
  { path: '/', component: LandingPage },
  { 
    path: '/login', 
    component: Login,
    beforeEnter: redirectIfLoggedIn
  },
  { path: '/register', component: Register },
  {
    path: '/dguru',
    name: 'GuruDashboard',
    component: GuruDashboard,
    beforeEnter: requireGuru
  },
  {
    path: '/drangtua',
    name: 'OrangTuaDashboard',
    component: OrangTuaDashboard,
    beforeEnter: requireOrangTua
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global route guard sudah tidak diperlukan karena menggunakan beforeEnter di setiap route

export default router 