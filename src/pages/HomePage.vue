<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100">
    <!-- Hero Section -->
    <section ref="heroRef" :class="sectionClass.hero" class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 opacity-50"></div>
      <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div class="inline-block bg-white rounded-full p-6 shadow-2xl mb-6 animate-bounce">
          <img :src="LogoPaud" alt="Logo PAUD" class="h-20 w-20 object-contain mx-auto" />
        </div>
        <h1 class="text-6xl font-bold text-purple-800 mb-6 leading-tight">
          Selamat Datang di<br>
          <span class="text-pink-600">PAUD Anggrek Mekar</span>
        </h1>
        <p class="text-2xl text-purple-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          🌟 Tempat terbaik untuk mengembangkan potensi anak-anak usia dini dengan metode pembelajaran yang menyenangkan dan berkualitas! 🌟
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <router-link 
            v-if="!isLoggedIn()"
            to="/login" 
            class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl"
          >
            <span class="mr-3">🚀</span> Masuk Sekarang
          </router-link>
        </div>
        <div class="mt-8 text-4xl flex items-center justify-center gap-2">
          <span>🎨</span> <span>🌟</span> <img :src="LogoPaud" alt="Logo PAUD" class="inline h-8 w-8 object-contain" /> <span>🎪</span> <span>🎭</span>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section ref="featuresRef" :class="sectionClass.features" class="py-20 bg-white relative">
      <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-5xl mb-4 block">✨</span>
          <h2 class="text-4xl font-bold text-purple-800 mb-4">Mengapa Memilih PAUD Anggrek?</h2>
          <p class="text-xl text-gray-600">Kami memberikan yang terbaik untuk masa depan anak-anak Anda</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-blue-200 hover:border-blue-300 transition-all transform hover:scale-105">
            <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span class="text-white text-3xl">🎨</span>
            </div>
            <h3 class="text-2xl font-bold text-blue-800 mb-4">Pembelajaran Kreatif</h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              Metode pembelajaran yang menyenangkan dan kreatif untuk mengembangkan potensi anak dengan permainan edukatif.
            </p>
          </div>
          <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border-4 border-green-200 hover:border-green-300 transition-all transform hover:scale-105">
            <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span class="text-white text-3xl">👥</span>
            </div>
            <h3 class="text-2xl font-bold text-green-800 mb-4">Guru Berpengalaman</h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              Tim pengajar yang profesional dan berpengalaman dalam mendidik anak usia dini dengan penuh kasih sayang.
            </p>
          </div>
          <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 border-4 border-yellow-200 hover:border-yellow-300 transition-all transform hover:scale-105">
            <div class="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span class="text-white text-3xl">🏠</span>
            </div>
            <h3 class="text-2xl font-bold text-yellow-800 mb-4">Lingkungan Aman</h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              Lingkungan yang aman, nyaman, dan mendukung untuk pertumbuhan anak.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section ref="programRef" :class="sectionClass.program" class="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-5xl mb-4 block">🎪</span>
          <h2 class="text-4xl font-bold text-purple-800 mb-4">Program Unggulan</h2>
          <p class="text-xl text-gray-600">Berbagai program menarik untuk mengembangkan bakat anak</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-xl border-4 border-pink-200 hover:border-pink-300 transition-all transform hover:scale-105">
            <div class="text-center">
              <span class="text-4xl mb-4 block">👶</span>
              <h3 class="text-xl font-bold text-pink-800 mb-3">Kelompok Bermain</h3>
              <p class="text-gray-600 font-semibold">Usia 2-3 tahun</p>
              <p class="text-gray-500 text-sm mt-2">Belajar sambil bermain dengan teman-teman</p>
            </div>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-xl border-4 border-blue-200 hover:border-blue-300 transition-all transform hover:scale-105">
            <div class="text-center">
              <span class="text-4xl mb-4 block">🌟</span>
              <h3 class="text-xl font-bold text-blue-800 mb-3">Taman Kanak-Kanak</h3>
              <p class="text-gray-600 font-semibold">Usia 4-6 tahun</p>
              <p class="text-gray-500 text-sm mt-2">Persiapan masuk sekolah dasar</p>
            </div>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-xl border-4 border-green-200 hover:border-green-300 transition-all transform hover:scale-105">
            <div class="text-center">
              <span class="text-4xl mb-4 block">🌞</span>
              <h3 class="text-xl font-bold text-green-800 mb-3">Program Full Day</h3>
              <p class="text-gray-600 font-semibold">Pembelajaran lengkap</p>
              <p class="text-gray-500 text-sm mt-2">Aktivitas seharian yang menyenangkan</p>
            </div>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-xl border-4 border-purple-200 hover:border-purple-300 transition-all transform hover:scale-105">
            <div class="text-center">
              <span class="text-4xl mb-4 block">🎭</span>
              <h3 class="text-xl font-bold text-purple-800 mb-3">Ekstrakurikuler</h3>
              <p class="text-gray-600 font-semibold">Seni, musik, olahraga</p>
              <p class="text-gray-500 text-sm mt-2">Mengembangkan bakat dan minat</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guru Section -->
    <section class="py-16 bg-gradient-to-br from-blue-50 to-pink-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-2">Guru-Guru Hebat Kami</h2>
          <p class="text-lg text-gray-600">Mendidik dengan hati, penuh semangat dan kasih sayang</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div v-for="n in 3" :key="'guru'+n" class="border-4 w-72 h-60 flex flex-col items-center justify-center bg-white">
            <img :src="[Guru1, Guru2, Guru3][n-1]" :alt="'Guru ' + n" class="w-48 h-40 object-cover mb-4 cursor-pointer" @click="showFullImage([Guru1, Guru2, Guru3][n-1])" />
            <p class="font-bold text-blue-700">Guru Kami</p>
          </div>
        </div>

        <!-- Modal Full Image -->
        <div v-if="fullImage" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" @click.self="closeFullImage">
          <div class="relative">
            <img :src="fullImage" alt="Full Guru" class="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl border-4 border-white" />
            <button @click="closeFullImage" class="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-black font-bold text-lg shadow">&times;</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Aktivitas Section -->
    <section class="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-green-800 mb-2">Aktivitas Seru di PAUD</h2>
          <p class="text-lg text-gray-600">Kegiatan harian yang menyenangkan dan mendidik</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="n in 4" :key="'aktivitas'+n" class="rounded-2xl overflow-hidden shadow-xl border-4 border-pink-100 bg-white flex flex-col items-center">
            <img :src="[img1, img2, img3, img4][n-1]" :alt="'Aktivitas ' + n" class="w-full h-40 object-cover cursor-pointer" @click="showFullImage([img1, img2, img3, img4][n-1])" />
            <div class="p-4 text-center">
              <p class="font-bold text-pink-700">Aktivitas {{ n }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visi Section -->
    <section ref="visiRef" :class="sectionClass.visi" class="py-20 bg-gradient-to-br from-blue-50 to-green-50 relative">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-5xl mb-4 block">🎯</span>
          <h2 class="text-4xl font-bold text-blue-800 mb-4">Visi & Misi</h2>
          <p class="text-xl text-gray-600">Panduan dan tujuan kami dalam mendidik anak-anak</p>
        </div>
        
        <!-- Visi -->
        <div class="bg-white rounded-3xl shadow-2xl p-10 mb-12 border-4 border-blue-200">
          <div class="text-center mb-8">
            <span class="text-6xl mb-4 block">🌟</span>
            <h3 class="text-3xl font-bold text-blue-800 mb-4">Visi</h3>
          </div>
          <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-2xl border-2 border-blue-300">
            <p class="text-2xl text-center font-bold text-blue-900 leading-relaxed">
              "Menyiapkan Generasi yang Sehat, Beriman, Cerdas, Kreatif, Mandiri dan Santun."
            </p>
          </div>
        </div>

        <!-- Misi -->
        <div class="bg-white rounded-3xl shadow-2xl p-10 border-4 border-green-200">
          <div class="text-center mb-8">
            <span class="text-6xl mb-4 block">🎯</span>
            <h3 class="text-3xl font-bold text-green-800 mb-4">Misi</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border-2 border-green-300 hover:border-green-400 transition-all transform hover:scale-105">
              <div class="flex items-start space-x-4">
                <span class="text-3xl">1️⃣</span>
                <p class="text-lg text-green-800 font-semibold leading-relaxed">
                  Menyelenggarakan layanan yang holistik-integratif.
                </p>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-300 hover:border-blue-400 transition-all transform hover:scale-105">
              <div class="flex items-start space-x-4">
                <span class="text-3xl">2️⃣</span>
                <p class="text-lg text-blue-800 font-semibold leading-relaxed">
                  Meningkatkan kesehatan anak melalui optimalisasi kegiatan posyandu dan pemeriksaan kesehatan secara rutin.
                </p>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-300 hover:border-purple-400 transition-all transform hover:scale-105">
              <div class="flex items-start space-x-4">
                <span class="text-3xl">3️⃣</span>
                <p class="text-lg text-purple-800 font-semibold leading-relaxed">
                  Meningkatkan pelayanan pendidikan anak usia dini melalui kegiatan pembelajaran yang menyenangkan sesuai dengan tahapan perkembangan, minat dan potensi anak.
                </p>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-2xl border-2 border-pink-300 hover:border-pink-400 transition-all transform hover:scale-105">
              <div class="flex items-start space-x-4">
                <span class="text-3xl">4️⃣</span>
                <p class="text-lg text-pink-800 font-semibold leading-relaxed">
                  Membangun pembiasaan perilaku/karakter dan kemandirian anak.
                </p>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl border-2 border-yellow-300 hover:border-yellow-400 transition-all transform hover:scale-105">
              <div class="flex items-start space-x-4">
                <span class="text-3xl">5️⃣</span>
                <p class="text-lg text-yellow-800 font-semibold leading-relaxed">
                  Menanamkan nilai-nilai agama dalam setiap proses pembelajaran.
                </p>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-2xl border-2 border-orange-300 hover:border-orange-400 transition-all transform hover:scale-105">
              <div class="flex items-start space-x-4">
                <span class="text-3xl">6️⃣</span>
                <p class="text-lg text-orange-800 font-semibold leading-relaxed">
                  Mengembangkan potensi anak usia dini.
                </p>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-2xl border-2 border-indigo-300 hover:border-indigo-400 transition-all transform hover:scale-105 md:col-span-2">
              <div class="flex items-start space-x-4">
                <span class="text-3xl">7️⃣</span>
                <p class="text-lg text-indigo-800 font-semibold leading-relaxed">
                  Memberdayakan potensi lingkungan sekitar dan nilai-nilai budaya untuk meningkatkan proses pembelajaran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section ref="ctaRef" :class="sectionClass.cta" class="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
        <span class="text-6xl mb-6 block">🌟</span>
        <h2 class="text-4xl font-bold mb-6">Siap Bergabung dengan Kami?</h2>
        <p class="text-2xl mb-10 leading-relaxed">
          🎉 Daftarkan anak Anda sekarang dan berikan mereka awal yang terbaik untuk masa depan yang cemerlang! 🎉
        </p>
        <router-link 
          v-if="!isLoggedIn()"
          to="/register" 
          class="bg-white text-purple-600 hover:bg-gray-100 px-12 py-5 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl inline-block"
        >
          <span class="mr-3">📝</span> Daftar Sekarang
        </router-link>
        <div class="mt-8 text-4xl flex items-center justify-center gap-2">
          <span>🎨</span> <span>🎪</span> <span>🎭</span> <img :src="LogoPaud" alt="Logo PAUD" class="inline h-8 w-8 object-contain" /> <span>🌟</span>
        </div>
      </div>
    </section>

    <!-- Floating Scroll to Top Button -->
    <button v-show="showScrollTop" @click="scrollToTop" class="fixed z-50 bottom-8 right-8 bg-gradient-to-r from-pink-400 to-blue-400 text-white shadow-2xl rounded-full p-4 text-3xl hover:scale-110 transition-all border-4 border-yellow-200 animate-bounce">
      ⬆️
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { isLoggedIn } from '../utils/auth.js'
import img1 from '@/assets/1.jpg'
import img2 from '@/assets/2.jpg'
import img3 from '@/assets/3.jpg'
import img4 from '@/assets/4.jpg'
import LogoPaud from '@/assets/LogoPaud.png'
import Guru1 from '@/assets/Guru1.jpg'
import Guru2 from '@/assets/Guru2.jpg'
import Guru3 from '@/assets/Guru3.jpg'
// import Navbar from '../components/Navbar.vue'

const heroRef = ref(null)
const featuresRef = ref(null)
const programRef = ref(null)
const visiRef = ref(null)
const ctaRef = ref(null)

const sectionClass = ref({
  hero: 'opacity-0 translate-y-10 transition-all duration-700',
  features: 'opacity-0 translate-y-10 transition-all duration-700',
  program: 'opacity-0 translate-y-10 transition-all duration-700',
  visi: 'opacity-0 translate-y-10 transition-all duration-700',
  cta: 'opacity-0 translate-y-10 transition-all duration-700',
})

const showScrollTop = ref(false)
const fullImage = ref(null)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function showFullImage(img) {
  fullImage.value = img
}
function closeFullImage() {
  fullImage.value = null
}

let observer

onMounted(() => {
  // Intersection Observer untuk animasi scroll reveal
  const reveal = (section, key) => {
    observer.observe(section.value)
    section.value.dataset.sectionKey = key
  }
  observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const key = entry.target.dataset.sectionKey
        sectionClass.value[key] = 'opacity-100 translate-y-0 transition-all duration-700'
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })

  reveal(heroRef, 'hero')
  reveal(featuresRef, 'features')
  reveal(programRef, 'program')
  reveal(visiRef, 'visi')
  reveal(ctaRef, 'cta')

  // Scroll to top button
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  showScrollTop.value = window.scrollY > 300
}
</script> 