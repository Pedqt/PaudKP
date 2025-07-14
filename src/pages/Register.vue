<template>
  <div class="min-h-screen bg-gradient-to-br from-green-100 via-yellow-100 to-orange-100">
    <!-- <Navbar /> -->
    <div class="flex items-center justify-center py-12 px-4 relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute top-10 left-10 text-4xl opacity-20 animate-bounce">🎨</div>
    <div class="absolute top-20 right-20 text-4xl opacity-20 animate-bounce" style="animation-delay: 0.5s;">🌟</div>
    <div class="absolute bottom-20 left-20 text-4xl opacity-20 animate-bounce" style="animation-delay: 1s;">🎓</div>
    <div class="absolute bottom-10 right-10 text-4xl opacity-20 animate-bounce" style="animation-delay: 1.5s;">🎪</div>
    
    <div class="max-w-md w-full relative z-10">
      <div class="bg-white rounded-3xl shadow-2xl p-8 border-4 border-green-200">
        <div class="text-center mb-8">
          <div class="inline-block bg-gradient-to-r from-green-500 to-yellow-500 rounded-full p-4 mb-4 shadow-lg">
            <span class="text-4xl">📝</span>
          </div>
          <h1 class="text-3xl font-bold text-green-800 mb-2">Daftar Akun Baru!</h1>
          <p class="text-gray-600 text-lg">🌟 Bergabunglah dengan keluarga PAUD Anggrek Mekar 🌟</p>
        </div>
        
        <form @submit.prevent="register" class="space-y-6">
          <!-- Hapus field peran -->
          <!--
          <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-2xl border-2 border-yellow-200">
            <label for="role" class="block text-sm font-bold text-yellow-800 mb-2">
              👥 Peran
            </label>
            <select 
              id="role"
              v-model="formData.role" 
              class="w-full px-4 py-3 border-2 border-yellow-200 rounded-xl focus:ring-4 focus:ring-yellow-300 focus:border-yellow-400 transition-all"
              :class="{ 'border-red-400 focus:ring-red-300 focus:border-red-500': errors.role }"
            >
              <option value="">Pilih peran Anda</option>
              <option value="orangtua">👨‍👩‍👧‍👦 Orang Tua</option>
            </select>
            <p v-if="errors.role" class="text-red-500 text-sm mt-2 flex items-center">
              <span class="mr-1">⚠️</span> {{ errors.role }}
            </p>
          </div>
          -->

          <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl border-2 border-blue-200">
            <label for="fullName" class="block text-sm font-bold text-blue-800 mb-2">
              👤 Nama Lengkap
            </label>
            <input 
              id="fullName"
              v-model="formData.fullName" 
              type="text" 
              placeholder="Masukkan nama lengkap Anda" 
              class="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-400 transition-all"
              :class="{ 'border-red-400 focus:ring-red-300 focus:border-red-500': errors.fullName }"
            />
            <p v-if="errors.fullName" class="text-red-500 text-sm mt-2 flex items-center">
              <span class="mr-1">⚠️</span> {{ errors.fullName }}
            </p>
          </div>

          <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-2xl border-2 border-purple-200">
            <label for="email" class="block text-sm font-bold text-purple-800 mb-2">
              📧 Email
            </label>
            <input 
              id="email"
              v-model="formData.email" 
              type="email" 
              placeholder="Masukkan email Anda" 
              class="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-400 transition-all"
              :class="{ 'border-red-400 focus:ring-red-300 focus:border-red-500': errors.email }"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-2 flex items-center">
              <span class="mr-1">⚠️</span> {{ errors.email }}
            </p>
          </div>
          
          <div class="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-2xl border-2 border-pink-200">
            <label for="username" class="block text-sm font-bold text-pink-800 mb-2">
              🎯 Username
            </label>
            <input 
              id="username"
              v-model="formData.username" 
              type="text" 
              placeholder="Masukkan username Anda" 
              class="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-400 transition-all"
              :class="{ 'border-red-400 focus:ring-red-300 focus:border-red-500': errors.username }"
            />
            <p v-if="errors.username" class="text-red-500 text-sm mt-2 flex items-center">
              <span class="mr-1">⚠️</span> {{ errors.username }}
            </p>
          </div>

          <!-- Field NIP untuk Guru -->
          <!--
          <div v-if="formData.role === 'guru'" class="bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-2xl border-2 border-indigo-200">
            <label for="nip" class="block text-sm font-bold text-indigo-800 mb-2">
              🆔 NIP
            </label>
            <input 
              id="nip"
              v-model="formData.nip" 
              type="text" 
              placeholder="Masukkan NIP Anda" 
              class="w-full px-4 py-3 border-2 border-indigo-200 rounded-xl focus:ring-4 focus:ring-indigo-300 focus:border-indigo-400 transition-all"
              :class="{ 'border-red-400 focus:ring-red-300 focus:border-red-500': errors.nip }"
            />
            <p v-if="errors.nip" class="text-red-500 text-sm mt-2 flex items-center">
              <span class="mr-1">⚠️</span> {{ errors.nip }}
            </p>
          </div>
          -->

          <!-- Field Nama Anak untuk Orang Tua -->
          <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-2xl border-2 border-yellow-200">
            <label for="namaAnak" class="block text-sm font-bold text-yellow-800 mb-2">
              👶 Nama Anak
            </label>
            <input 
              id="namaAnak"
              v-model="formData.namaAnak" 
              type="text" 
              placeholder="Masukkan nama anak Anda" 
              class="w-full px-4 py-3 border-2 border-yellow-200 rounded-xl focus:ring-4 focus:ring-yellow-300 focus:border-yellow-400 transition-all"
              :class="{ 'border-red-400 focus:ring-red-300 focus:border-red-500': errors.namaAnak }"
            />
            <p v-if="errors.namaAnak" class="text-red-500 text-sm mt-2 flex items-center">
              <span class="mr-1">⚠️</span> {{ errors.namaAnak }}
            </p>
          </div>
          
          <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-2xl border-2 border-green-200">
            <label for="password" class="block text-sm font-bold text-green-800 mb-2">
              🔒 Password
            </label>
            <input 
              id="password"
              v-model="formData.password" 
              type="password" 
              placeholder="Masukkan password Anda" 
              class="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-400 transition-all"
              :class="{ 'border-red-400 focus:ring-red-300 focus:border-red-500': errors.password }"
            />
            <p v-if="errors.password" class="text-red-500 text-sm mt-2 flex items-center">
              <span class="mr-1">⚠️</span> {{ errors.password }}
            </p>
          </div>

          <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-2xl border-2 border-orange-200">
            <label for="confirmPassword" class="block text-sm font-bold text-orange-800 mb-2">
              🔐 Konfirmasi Password
            </label>
            <input 
              id="confirmPassword"
              v-model="formData.confirmPassword" 
              type="password" 
              placeholder="Konfirmasi password Anda" 
              class="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-4 focus:ring-orange-300 focus:border-orange-400 transition-all"
              :class="{ 'border-red-400 focus:ring-red-300 focus:border-red-500': errors.confirmPassword }"
            />
            <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-2 flex items-center">
              <span class="mr-1">⚠️</span> {{ errors.confirmPassword }}
            </p>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            :disabled="isLoading"
          >
            <span v-if="isLoading" class="flex items-center justify-center">
              <span class="animate-spin mr-2">⏳</span> Memproses...
            </span>
            <span v-else class="flex items-center justify-center">
              <span class="mr-2">🚀</span> Daftar Sekarang
            </span>
          </button>
        </form>
        
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">
            Sudah punya akun? 
            <router-link to="/login" class="text-green-600 hover:text-green-700 font-bold underline">
              🚪 Masuk di sini
            </router-link>
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { getUsers, setUsers } from '../utils/localStorage.js'

const router = useRouter()
const isLoading = ref(false)

// Hapus property role dari formData dan errors
const formData = reactive({
  fullName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  namaAnak: ''
})

const errors = reactive({
  fullName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  namaAnak: ''
})

// Hapus watch untuk role

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')
  
  let isValid = true
  
  if (!formData.fullName.trim()) {
    errors.fullName = 'Nama lengkap harus diisi'
    isValid = false
  }
  
  if (!formData.email.trim()) {
    errors.email = 'Email harus diisi'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Format email tidak valid'
    isValid = false
  }
  
  if (!formData.username.trim()) {
    errors.username = 'Username harus diisi'
    isValid = false
  } else if (formData.username.length < 3) {
    errors.username = 'Username minimal 3 karakter'
    isValid = false
  } else {
    // Cek apakah username sudah ada
    const existingUsers = getUsers()
    const usernameExists = existingUsers.some(user => user.username === formData.username)
    if (usernameExists) {
      errors.username = 'Username sudah digunakan'
      isValid = false
    }
  }

  // Validasi Nama Anak
    if (!formData.namaAnak.trim()) {
    errors.namaAnak = 'Nama Anak harus diisi'
      isValid = false
  }
  
  if (!formData.password) {
    errors.password = 'Password harus diisi'
    isValid = false
  } else if (formData.password.length < 6) {
    errors.password = 'Password minimal 6 karakter'
    isValid = false
  }
  
  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Konfirmasi password harus diisi'
    isValid = false
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Password tidak cocok'
    isValid = false
  }
  
  return isValid
}

const register = async () => {
  if (!validateForm()) return
  
  isLoading.value = true
  
  try {
    // Simulasi registrasi lokal (tanpa backend)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simpan user baru ke localStorage
    const newUser = {
      id: Date.now(),
      fullName: formData.fullName,
      email: formData.email,
      username: formData.username,
      password: formData.password,
      role: 'orangtua',
      namaAnak: formData.namaAnak
    }
    
    const existingUsers = getUsers()
    existingUsers.push(newUser)
    setUsers(existingUsers)
    
    // Handle successful registration
    alert('🎉 Pendaftaran berhasil! Silakan login dengan akun baru Anda.')
    
    // Redirect ke halaman login setelah pendaftaran berhasil
    router.push('/login')
    
  } catch (error) {
    console.error('Error during registration:', error)
    alert('❌ Terjadi kesalahan saat mendaftar. Silakan coba lagi.')
  } finally {
    isLoading.value = false
  }
}
</script> 