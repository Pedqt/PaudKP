<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-12 px-4 relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute top-10 left-10 text-4xl opacity-20 animate-bounce">🎨</div>
    <div class="absolute top-20 right-20 text-4xl opacity-20 animate-bounce" style="animation-delay: 0.5s;">🌟</div>
    <div class="absolute bottom-20 left-20 text-4xl opacity-20 animate-bounce" style="animation-delay: 1s;">🎓</div>
    <div class="absolute bottom-10 right-10 text-4xl opacity-20 animate-bounce" style="animation-delay: 1.5s;">🎪</div>
    
    <div class="max-w-md w-full relative z-10">
      <div class="bg-white rounded-3xl shadow-2xl p-8 border-4 border-purple-200">
        <div class="text-center mb-8">
          <div class="inline-block bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 mb-4 shadow-lg">
            <span class="text-4xl">🎓</span>
          </div>
          <h1 class="text-3xl font-bold text-purple-800 mb-2">Selamat Datang!</h1>
          <p class="text-gray-600 text-lg">🌟 Masuk ke sistem PAUD Anggrek Mekar 🌟</p>
        </div>
        
        <!-- Tab switcher bulat/tabung -->
        <div class="flex items-center justify-center mb-6">
          <button
            @click="setRole('guru')"
            :class="[
              'px-8 py-2 rounded-full font-bold text-lg mx-1 transition-all duration-300',
              selectedRole === 'guru'
                ? 'bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-purple-500 hover:bg-purple-100'
            ]"
          >
            Guru
          </button>
          <button
            @click="setRole('orangtua')"
            :class="[
              'px-8 py-2 rounded-full font-bold text-lg mx-1 transition-all duration-300',
              selectedRole === 'orangtua'
                ? 'bg-gradient-to-r from-green-400 to-yellow-300 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-green-600 hover:bg-green-100'
            ]"
          >
            Orang Tua
          </button>
        </div>
        <transition name="slide-fade" mode="out-in">
          <form :key="selectedRole" @submit.prevent="login" class="space-y-6">
          <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl border-2 border-blue-200">
            <label for="username" class="block text-sm font-bold text-blue-800 mb-2">
                👤 Username {{ selectedRole === 'guru' ? 'Guru' : 'Orang Tua' }}
            </label>
            <input 
              id="username"
              v-model="username" 
              type="text" 
                :placeholder="selectedRole === 'guru' ? 'Masukkan username guru' : 'Masukkan username orang tua'" 
              class="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-400 transition-all"
              :class="{ 'border-red-400 focus:ring-red-300 focus:border-red-500': errors.username }"
            />
            <p v-if="errors.username" class="text-red-500 text-sm mt-2 flex items-center">
              <span class="mr-1">⚠️</span> {{ errors.username }}
            </p>
          </div>
          <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-2xl border-2 border-green-200">
            <label for="password" class="block text-sm font-bold text-green-800 mb-2">
              🔒 Password
            </label>
            <input 
              id="password"
              v-model="password" 
              type="password" 
                :placeholder="selectedRole === 'guru' ? 'Masukkan password guru' : 'Masukkan password orang tua'" 
              class="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-400 transition-all"
              :class="{ 'border-red-400 focus:ring-red-300 focus:border-red-500': errors.password }"
            />
            <p v-if="errors.password" class="text-red-500 text-sm mt-2 flex items-center">
              <span class="mr-1">⚠️</span> {{ errors.password }}
            </p>
          </div>
          <button 
            type="submit" 
            class="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            :disabled="isLoading"
          >
            <span v-if="isLoading" class="flex items-center justify-center">
              <span class="animate-spin mr-2">⏳</span> Memproses...
            </span>
            <span v-else class="flex items-center justify-center">
              <span class="mr-2">🚀</span> Masuk
            </span>
          </button>
        </form>
        </transition>
        
        <div class="mt-8 text-center">
          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-2xl border-2 border-yellow-200 mb-4">
            <p class="text-sm text-gray-700 font-semibold mb-2">🎯 Kredensial Login:</p>
            <div class="text-sm text-gray-600 space-y-1">
              <p><strong>Untuk Guru:</strong></p>
              <p>Username: <span class="font-mono bg-yellow-200 px-2 py-1 rounded-lg font-bold">Guru</span></p>
              <p>Password: <span class="font-mono bg-yellow-200 px-2 py-1 rounded-lg font-bold">Guru123</span></p>
              <p class="mt-2"><strong>Untuk Orang Tua:</strong></p>
              <p>Username: <span class="font-mono bg-yellow-200 px-2 py-1 rounded-lg font-bold">Ortu</span></p>
              <p>Password: <span class="font-mono bg-yellow-200 px-2 py-1 rounded-lg font-bold">Ortu123</span></p>
            </div>
          </div>
          <p class="text-sm text-gray-600">
            Belum punya akun? 
            <router-link to="/register" class="text-purple-600 hover:text-purple-700 font-bold underline">
              📝 Daftar di sini
            </router-link>
          </p>
        </div>
      </div>
    </div>
    
    <!-- PopUp Komponen -->
    <PopUpBerhasil :show="showSuccess" :message="successMessage" @close="showSuccess = false" />
    <PopUpGagal :show="showError" :message="errorMessage" @close="showError = false" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import PopUpBerhasil from '../components/PopUpBerhasil.vue'
import PopUpGagal from '../components/PopUpGagal.vue'
import { loginUser, validateCredentials } from '../utils/auth.js'

const username = ref('')
const password = ref('')
const isLoading = ref(false)
const router = useRouter()
const selectedRole = ref('guru')

const errors = reactive({
  username: '',
  password: ''
})

const showSuccess = ref(false)
const showError = ref(false)
const successMessage = ref('Login berhasil!')
const errorMessage = ref('Username atau password salah!')

const validateForm = () => {
  errors.username = ''
  errors.password = ''
  
  if (!username.value) {
    errors.username = 'Username harus diisi'
    return false
  }
  
  if (!password.value) {
    errors.password = 'Password harus diisi'
    return false
  }
  
  return true
}

function setRole(role) {
  if (selectedRole.value !== role) {
    selectedRole.value = role
    username.value = ''
    password.value = ''
    errors.username = ''
    errors.password = ''
  }
}

// Login dengan kredensial hardcoded untuk guru dan orangtua
const login = async () => {
  if (!validateForm()) return
  isLoading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Validasi kredensial menggunakan utility function
    if (validateCredentials(username.value, password.value, selectedRole.value)) {
      // Login user menggunakan utility function
      loginUser(username.value, selectedRole.value)
      window.dispatchEvent(new Event('user-changed'))
      
      showSuccess.value = true
      successMessage.value = `🎉 Login berhasil sebagai ${selectedRole.value === 'guru' ? 'Guru' : 'Orang Tua'}! 🎉`
      
      setTimeout(() => {
        showSuccess.value = false
        if (selectedRole.value === 'guru') {
          router.push('/dguru')
        } else if (selectedRole.value === 'orangtua') {
          router.push('/drangtua')
        }
      }, 1500)
    } else {
      errors.password = ''
      showError.value = true
      errorMessage.value = `❌ Username atau password salah untuk ${selectedRole.value === 'guru' ? 'Guru' : 'Orang Tua'}! Silakan coba lagi.`
    }
  } catch (error) {
    console.error('Error during login:', error)
    errors.password = ''
    showError.value = true
    errorMessage.value = '❌ Terjadi kesalahan saat login. Silakan coba lagi.'
  } finally {
    isLoading.value = false
  }
}
</script> 

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(.55,0,.1,1);
}
.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>