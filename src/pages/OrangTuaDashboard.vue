<template>
  <div class="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100">
    <!-- <Navbar /> -->
    <div class="py-8">
      <div class="max-w-3xl mx-auto px-4">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-pink-800 mb-2">Dashboard Orang Tua</h1>
        <p class="text-lg text-pink-600">Lihat data dan nilai anak Anda</p>
      </div>

      <!-- Data Anak -->
      <div class="bg-white rounded-2xl shadow-xl p-8 mb-12 border-4 border-yellow-200">
        <h2 class="text-2xl font-bold text-blue-800 mb-6 flex items-center"><span class="mr-2">👧</span> Data Anak</h2>
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-200 to-pink-200 flex items-center justify-center shadow-lg border-4 border-white mb-3 overflow-hidden">
            <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Anak Dummy" class="w-full h-full object-cover" />
          </div>
          <div>
            <p class="font-bold text-blue-700 text-xl">{{ anak.nama }}</p>
            <p class="text-gray-600">Kelas: <span class="font-semibold">{{ anak.kelas }}</span></p>
            <p class="text-gray-600">Tanggal Lahir: <span class="font-semibold">{{ formatDate(anak.tanggalLahir) }}</span></p>
            <p class="text-gray-600">Orang Tua: <span class="font-semibold">{{ anak.namaOrangTua }}</span></p>
          </div>
        </div>
      </div>

      <!-- Nilai Anak -->
      <div class="bg-white rounded-2xl shadow-xl p-8 border-4 border-green-200">
        <h2 class="text-2xl font-bold text-green-800 mb-6 flex items-center"><span class="mr-2">📊</span> Nilai Anak</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white rounded-xl">
            <thead>
              <tr class="bg-gradient-to-r from-green-200 to-green-100">
                <th class="py-3 px-4 text-left font-bold">Mata Pelajaran</th>
                <th class="py-3 px-4 text-left font-bold">Nilai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4 font-semibold">Nilai Umum</td>
                <td class="py-2 px-4 text-lg text-green-700 font-bold">{{ nilaiAnak }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="notif.show" class="mt-6 text-center">
          <span :class="notif.type === 'success' ? 'text-green-600' : 'text-red-600'" class="font-bold text-lg">{{ notif.message }}</span>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getNilaiSiswa } from '../utils/localStorage.js'
// import Navbar from '../components/Navbar.vue'

// Data anak dummy (bisa diambil dari localStorage user login jika sudah ada sistem login lengkap)
const anak = ref({
  id: 1,
  nama: "Budi",
  kelas: "TK A",
  tanggalLahir: "2018-01-01",
  namaOrangTua: "Pak Joko"
})

const nilaiAnak = ref('-')
const notif = ref({ show: false, message: '', type: '' })

onMounted(() => {
  const allNilai = getNilaiSiswa()
  nilaiAnak.value = allNilai[anak.value.id] !== undefined ? allNilai[anak.value.id] : '-'
})

function formatDate(dateString) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 