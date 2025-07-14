<template>
  <nav class="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white p-4 shadow-2xl border-b-4 border-yellow-300">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <router-link to="/" class="flex items-center space-x-3 hover:scale-105 transition-transform">
        <div class="bg-white rounded-full p-2 shadow-lg">
          <img src="/src/assets/logopaud.jpeg" alt="PAUD Anggrek Mekar Logo" class="h-12 w-auto rounded-full">
        </div>
        <div class="hidden md:block">
          <h1 class="text-xl font-bold">PAUD Anggrek Mekar</h1>
          <p class="text-xs text-yellow-200">Tempat Bermain & Belajar</p>
        </div>
      </router-link>
      
      <div class="space-x-6 flex items-center">
        <router-link to="/" class="hover:text-yellow-200 transition-colors font-semibold flex items-center">
          <span class="mr-1">🏠</span> Beranda
        </router-link>
        <template v-if="currentUser && currentUser.role === 'guru'">
          <router-link to="/dguru" class="hover:text-yellow-200 transition-colors font-semibold flex items-center">
            <span class="mr-1">📝</span> Edit Data Siswa
          </router-link>
        </template>
        <template v-if="currentUser && currentUser.role === 'orangtua'">
          <router-link to="/drangtua" class="hover:text-yellow-200 transition-colors font-semibold flex items-center">
            <span class="mr-1">👧</span> Data Anak
        </router-link>
        </template>
        
        <!-- User info dan logout -->
        <div v-if="currentUser" class="flex items-center space-x-4">
          <div class="bg-white bg-opacity-20 rounded-2xl px-4 py-2 border-2 border-white border-opacity-30">
            <span class="text-sm font-semibold">
              <span class="mr-1">👋</span> Selamat datang, {{ currentUser.username }}
            </span>
          </div>
          <button 
            @click="logout" 
            class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-2 rounded-2xl transition-all transform hover:scale-105 shadow-lg font-bold text-sm"
          >
            <span class="mr-1">🚪</span> Keluar
          </button>
        </div>
        
        <!-- Login/Register buttons -->
        <div v-else class="flex items-center space-x-3">
          <router-link 
            v-if="!currentUser"
            to="/login" 
            class="bg-white text-purple-600 hover:bg-gray-100 px-6 py-2 rounded-2xl transition-all transform hover:scale-105 shadow-lg font-bold text-sm"
          >
            <span class="mr-1">🚀</span> Masuk
          </router-link>
          <router-link 
            to="/register" 
            class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-2 rounded-2xl transition-all transform hover:scale-105 shadow-lg font-bold text-sm"
          >
            <span class="mr-1">📝</span> Daftar
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { getCurrentUser, logoutUser, isLoggedIn } from '../utils/auth.js'

const router = useRouter()
const currentUser = ref(null)

const updateCurrentUser = () => {
  if (isLoggedIn()) {
    currentUser.value = getCurrentUser()
  } else {
    currentUser.value = null
  }
}

const isAdmin = computed(() => {
  const user = currentUser.value
  return user ? user.role === 'admin' : localStorage.getItem('isAdmin') === 'true'
})

onMounted(() => {
  updateCurrentUser()
  window.addEventListener('storage', updateCurrentUser)
  window.addEventListener('user-changed', updateCurrentUser)
})

onUnmounted(() => {
  window.removeEventListener('storage', updateCurrentUser)
  window.removeEventListener('user-changed', updateCurrentUser)
})

const logout = () => {
  logoutUser()
  window.dispatchEvent(new Event('user-changed'))
  currentUser.value = null
  router.push('/')
}
</script> 