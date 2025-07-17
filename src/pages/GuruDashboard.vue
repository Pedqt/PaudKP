<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
    <!-- <Navbar /> -->
    <div class="py-8">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Judul utama dashboard guru -->
      <div class="mb-8 text-center">
            <div class="inline-block bg-white rounded-full p-4 shadow-lg mb-4">
              <img :src="LogoPaud" alt="Logo PAUD" class="h-12 w-12 object-contain mx-auto" />
            </div>
            <h1 class="text-4xl font-bold text-purple-800 mb-2">Dashboard Guru</h1>
        <p class="text-lg text-purple-600">Kelola data siswa dan input nilai dengan mudah</p>
          </div>
          <!-- Form Section dengan desain kartu yang menarik -->
            <div ref="formSection" class="bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-yellow-200">
              <div class="flex items-center mb-6">
                <span class="text-3xl mr-3">{{ formSiswa.id ? '✏️' : '➕' }}</span>
                <h2 class="text-2xl font-bold text-purple-800">
                  {{ formSiswa.id ? 'Edit Data Siswa' : 'Tambah Siswa Baru' }}
                </h2>
              </div>
              
              <form @submit.prevent="tambahSiswa" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                    <label class="block text-sm font-bold text-blue-800 mb-2">👤 Nama Lengkap</label>
                    <input 
                      v-model="formSiswa.nama" 
                      placeholder="Masukkan nama lengkap siswa" 
                      class="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-400 transition-all"
                      required
                    />
                  </div>
                  <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
                    <label class="block text-sm font-bold text-green-800 mb-2">🏫 Kelas</label>
                    <select 
                      v-model="formSiswa.kelas" 
                      class="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-400 transition-all"
                      required
                    >
                      <option value="">Pilih Kelas</option>
                      <option value="TK A">🎨 Kelas A</option>
                      <option value="TK B">🌟 Kelas B</option>
                    </select>
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-xl">
                    <label class="block text-sm font-bold text-pink-800 mb-2">🎂 Tanggal Lahir</label>
                    <input 
                      v-model="formSiswa.tanggalLahir" 
                      type="date" 
                      class="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-400 transition-all"
                    />
                  </div>
                  <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl">
                    <label class="block text-sm font-bold text-orange-800 mb-2">👨‍👩‍👧‍👦 Nama Orang Tua</label>
                    <input 
                      v-model="formSiswa.namaOrangTua" 
                      placeholder="Nama orang tua/wali" 
                      class="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-4 focus:ring-orange-300 focus:border-orange-400 transition-all"
                    />
                  </div>
                </div>
                
                <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl">
                  <label class="block text-sm font-bold text-purple-800 mb-2">📸 Foto Siswa</label>
                  <input 
                    type="file" 
                    @change="handleFoto" 
                    accept="image/*"
                    class="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-400 transition-all"
                    ref="fotoInput"
                  />
      </div>

                <!-- Field nilai dan catatan -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
                    <label class="block text-sm font-bold text-green-800 mb-2">📊 Nilai Siswa</label>
                    <select v-model="formSiswa.nilai" class="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-400 transition-all">
                      <option value="">Pilih Nilai</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                    </select>
                  </div>
                  <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-xl">
                    <label class="block text-sm font-bold text-yellow-800 mb-2">📝 Catatan untuk Siswa</label>
                    <textarea v-model="formSiswa.catatan" placeholder="Catatan untuk Siswa" class="w-full px-4 py-3 border-2 border-yellow-200 rounded-xl focus:ring-4 focus:ring-yellow-300 focus:border-yellow-400 transition-all"></textarea>
                  </div>
                </div>

                <div class="flex gap-4 pt-4">
                  <button 
                    type="submit" 
                    class="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                    :disabled="loading"
                  >
                    <span v-if="loading" class="flex items-center justify-center">
                      <span class="animate-spin mr-2">⏳</span> Menyimpan...
                    </span>
                    <span v-else class="flex items-center justify-center">
                      <span class="mr-2">➕</span>
                      Tambah Siswa
                    </span>
                  </button>
                  <button 
                    type="button" 
                    @click="resetForm"
                    class="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    <span class="mr-2">🔄</span> Reset
                  </button>
                </div>
              </form>
            </div>

            <!-- Search Section dengan desain yang menarik -->
            <div class="bg-white rounded-2xl shadow-xl p-6 mb-8 border-4 border-blue-200">
              <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div class="flex items-center">
                  <span class="text-3xl mr-3">📚</span>
                  <h2 class="text-2xl font-bold text-blue-800">Daftar Siswa</h2>
                </div>
                <div class="relative">
                  <input 
                    v-model="cari" 
                    placeholder=" Cari nama siswa..." 
                    class="pl-12 pr-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-400 w-full md:w-80 transition-all"
                  />
                  <span class="absolute left-4 top-3.5 text-blue-400 text-xl">🔍</span>
                </div>
              </div>
            </div>

            <!-- Students List dengan kartu yang menarik -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                v-for="siswa in siswaTersaring" 
                :key="siswa.id_siswa || siswa.id" 
                :id="'siswa-card-' + (siswa.id_siswa || siswa.id)"
                :class="[(idTerakhirUpdate === (siswa.id_siswa || siswa.id)) ? 'siswa-highlight' : '', 'bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 border-4 border-transparent hover:border-yellow-300']"
              >
                <div class="h-48 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center relative">
                  <img 
                    v-if="siswa.foto" 
                    :src="siswa.foto" 
                    :alt="siswa.nama"
                    class="w-full h-full object-cover"
                  />
                  <div v-else class="text-center">
                    <span class="text-6xl">👤</span>
                    <p class="text-gray-600 mt-2 font-semibold">Foto Siswa</p>
                  </div>
                  <div class="absolute top-2 right-2 bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
                    {{ siswa.kelas }}
        </div>
      </div>

                <div class="p-6">
                  <h3 class="text-xl font-bold text-purple-800 mb-3 flex items-center">
                    <span class="mr-2">🌟</span>
                    {{ siswa.nama }}
                  </h3>
                  <div class="space-y-2 mb-4">
                    <p class="text-gray-700 flex items-center">
                      <span class="mr-2">🏫</span>
                      <span class="font-medium">Kelas:</span> 
                      <span class="ml-1 text-purple-600 font-semibold">{{ siswa.kelas }}</span>
                    </p>
                    <p class="text-gray-700 flex items-center">
                      <span class="mr-2">🎂</span>
                      <span class="font-medium">Tanggal Lahir:</span> 
                      <span class="ml-1 text-purple-600 font-semibold">{{ formatTanggal(siswa.tanggalLahir) }}</span>
                    </p>
                    <p class="text-gray-700 flex items-center">
                      <span class="mr-2">👨‍👩‍👧‍👦</span>
                      <span class="font-medium">Orang Tua:</span> 
                      <span class="ml-1 text-purple-600 font-semibold">{{ siswa.namaOrangTua }}</span>
                    </p>
                    <p v-if="siswa.nilai" class="text-gray-700 flex items-center">
                      <span class="mr-2">📊</span>
                      <span class="font-medium">Nilai:</span> 
                      <span class="ml-1 text-purple-600 font-semibold">{{ siswa.nilai }}</span>
                    </p>
                    <p v-if="siswa.catatan" class="text-gray-700 flex items-center">
                      <span class="mr-2">📝</span>
                      <span class="font-medium">Catatan:</span> 
                      <span class="ml-1 text-purple-600 font-semibold">{{ siswa.catatan }}</span>
                    </p>
                  </div>
                  <div class="flex gap-3">
                    <button 
                      @click="editSiswa(siswa)" 
                      class="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 rounded-xl text-sm font-bold transition-all transform hover:scale-105"
                    >
                      <span class="mr-1">✏️</span> Edit
                    </button>
                    <button 
                      @click="hapusSiswa(siswa.id_siswa || siswa.id)" 
                      class="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-3 rounded-xl text-sm font-bold transition-all transform hover:scale-105"
                    >
                      <span class="mr-1">🗑️</span> Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty State yang menarik -->
            <div v-if="siswaTersaring.length === 0" class="text-center py-16">
              <div class="bg-white rounded-2xl shadow-xl p-12 border-4 border-yellow-200">
                <div class="text-8xl mb-6">📚</div>
                <h3 class="text-2xl font-bold text-purple-800 mb-4">
                  {{ cari ? 'Tidak ada siswa yang ditemukan' : 'Belum ada data siswa' }}
                </h3>
                <p class="text-lg text-gray-600 mb-6">
                  {{ cari ? 'Coba ubah kata kunci pencarian' : 'Mulai dengan menambahkan siswa baru di atas!' }}
                </p>
                <div class="text-4xl flex items-center justify-center gap-2">
                  <span>🎨</span> <span>🌟</span> <img :src="LogoPaud" alt="Logo PAUD" class="inline h-8 w-8 object-contain" />
                </div>
              </div>
            </div>

            <!-- Notification yang menarik -->
            <div 
              v-if="notif.tampil"
              :class="[
                'fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 rounded-2xl shadow-2xl text-white font-bold text-lg transition-all animate-bounce',
                notif.tipe === 'success' ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-500 to-red-600'
              ]"
            >
              <span class="mr-2">{{ notif.tipe === 'success' ? '✅' : '❌' }}</span>
              {{ notif.pesan }}
            </div>

            <!-- Popup Konfirmasi Hapus yang menarik -->
            <div v-if="popupHapus.tampil">
              <div class="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm"></div>
              <div class="fixed inset-0 z-50 flex items-center justify-center">
                <div class="bg-white rounded-2xl shadow-2xl p-8 w-96 text-center border-4 border-red-200">
                  <div class="text-6xl mb-4">⚠️</div>
                  <div class="mb-6 text-xl font-bold text-red-800">Yakin ingin menghapus data siswa ini?</div>
                  <div class="flex justify-center gap-4">
                    <button @click="konfirmasiHapus" class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
                      <span class="mr-2">🗑️</span> Ya, Hapus
                    </button>
                    <button @click="popupHapus.tampil = false" class="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
                      <span class="mr-2">❌</span> Batal
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Popup Konfirmasi Edit yang menarik -->
            <PopUpEditData
              :show="popupEdit.tampil"
              :data="popupEdit.data"
              @batal="popupEdit.tampil = false"
              @simpan="konfirmasiEdit"
            />

            <!-- Popup Konfirmasi Tambah -->
            <PopUpKonfirmasi
              :show="popupTambah.tampil"
              title="Tinjau Data Siswa"
              icon="📝"
              :showConfirm="true"
              :showCancel="true"
              confirmText="Ya, Tambah"
              confirmIcon="➕"
              cancelText="Batal"
              cancelIcon="❌"
              @confirm="konfirmasiTambah"
              @close="popupTambah.tampil = false"
            >
              <div class="text-left text-gray-700 mb-6 space-y-3 bg-gray-50 p-4 rounded-xl">
                <div v-if="formSiswa.foto" class="flex items-center mb-2">
                  <span class="mr-2">📸</span>
                  <span class="font-medium">Foto:</span>
                  <img :src="formSiswa.foto" alt="Foto Siswa" class="w-24 h-24 object-cover rounded-xl ml-4 border-2 border-purple-200" />
                </div>
                <div class="flex items-center"><span class="mr-2">👤</span><span class="font-medium">Nama:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formSiswa.nama }}</span></div>
                <div class="flex items-center"><span class="mr-2">🏫</span><span class="font-medium">Kelas:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formSiswa.kelas }}</span></div>
                <div v-if="formSiswa.tanggalLahir" class="flex items-center"><span class="mr-2">🎂</span><span class="font-medium">Tanggal Lahir:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formatTanggal(formSiswa.tanggalLahir) }}</span></div>
                <div v-if="formSiswa.namaOrangTua" class="flex items-center"><span class="mr-2">👨‍👩‍👧‍👦</span><span class="font-medium">Orang Tua:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formSiswa.namaOrangTua }}</span></div>
                <div v-if="formSiswa.nilai" class="flex items-center"><span class="mr-2">📊</span><span class="font-medium">Nilai:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formSiswa.nilai }}</span></div>
                <div v-if="formSiswa.catatan" class="flex items-center"><span class="mr-2">📝</span><span class="font-medium">Catatan:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formSiswa.catatan }}</span></div>
              </div>
            </PopUpKonfirmasi>

            <!-- Popup Konfirmasi Update yang menarik -->
            <div v-if="popupUpdate.show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div class="bg-white rounded-2xl shadow-2xl p-8 w-[400px] max-w-full text-center border-4 border-blue-200">
                <div class="text-6xl mb-4">🔄</div>
                <div class="mb-6 text-xl font-bold text-blue-800">Tinjau Data Siswa yang Akan Diupdate</div>
                <div class="text-left text-gray-700 mb-6 space-y-3 bg-gray-50 p-4 rounded-xl">
                  <div class="flex items-center"><span class="mr-2">👤</span><span class="font-medium">Nama:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formSiswa.nama }}</span></div>
                  <div class="flex items-center"><span class="mr-2">🏫</span><span class="font-medium">Kelas:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formSiswa.kelas }}</span></div>
                  <div v-if="formSiswa.tanggalLahir" class="flex items-center"><span class="mr-2">🎂</span><span class="font-medium">Tanggal Lahir:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formatTanggal(formSiswa.tanggalLahir) }}</span></div>
                  <div v-if="formSiswa.namaOrangTua" class="flex items-center"><span class="mr-2">👨‍👩‍👧‍👦</span><span class="font-medium">Orang Tua:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formSiswa.namaOrangTua }}</span></div>
                  <div v-if="formSiswa.foto" class="flex items-center">
                    <span class="mr-2">📸</span><span class="font-medium">Foto:</span><br>
                    <img :src="formSiswa.foto" alt="Foto Siswa" class="w-24 h-24 object-cover rounded-xl mx-auto mt-2 border-2 border-purple-200" />
                  </div>
                  <div v-if="formSiswa.nilai !== undefined && formSiswa.nilai !== ''" class="flex items-center">
                    <span class="mr-2">📊</span><span class="font-medium">Nilai:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formSiswa.nilai }}</span>
                  </div>
                  <div v-if="formSiswa.catatan !== undefined && formSiswa.catatan !== ''" class="flex items-center">
                    <span class="mr-2">📝</span><span class="font-medium">Catatan:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formSiswa.catatan }}</span>
                  </div>
                </div>
                <div class="flex justify-center gap-4">
                  <button @click="konfirmasiUpdate" class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
                    <span class="mr-2">💾</span> Ya, Update
                  </button>
                  <button @click="popupUpdate.show = false" class="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
                    <span class="mr-2">❌</span> Batal
                  </button>
                </div>
              </div>
            </div>

            <!-- Popup Error Validasi yang menarik -->
            <PopUpKonfirmasi
              :show="popupError.tampil"
              title="Terjadi Kesalahan"
              icon="❗"
              :showConfirm="false"
              :showCancel="true"
              cancelText="Tutup"
              cancelIcon="✅"
              @close="popupError.tampil = false"
            >
              <div class="mb-6 text-xl font-bold text-red-800">{{ popupError.pesan }}</div>
            </PopUpKonfirmasi>
          </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import PopUpKonfirmasi from '../components/PopUpKonfirmasi.vue'
import PopUpEditData from '../components/PopUpEditData.vue'
import { getNilaiSiswa, setNilaiSiswa, getSiswaList, setSiswaList } from '../utils/localStorage.js'
import LogoPaud from '@/assets/LogoPaud.png'

// Data utama
const daftarSiswa = ref(getSiswaList())
const formSiswa = ref({ id: null, nama: '', kelas: '', foto: '', tanggalLahir: '', namaOrangTua: '', nilai: '', catatan: '' })
const cari = ref('')
const loading = ref(false)
const notif = ref({ tampil: false, pesan: '', tipe: '' })
const popupHapus = ref({ tampil: false, id: null })
const popupEdit = ref({ tampil: false, data: null })
const popupTambah = ref({ tampil: false })
const popupError = ref({ tampil: false, pesan: '' })
const fotoInput = ref(null)
const formSection = ref(null)
const idTerakhirUpdate = ref(null)
const timeoutHighlight = ref(null)
const popupUpdate = ref({ show: false })

// Fungsi utilitas
function formatTanggal(tanggal) {
  if (!tanggal) return ''
  return new Date(tanggal).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
}
function resetForm() {
  formSiswa.value = { id: null, nama: '', kelas: '', foto: '', tanggalLahir: '', namaOrangTua: '', nilai: '', catatan: '' }
  if (fotoInput.value) fotoInput.value.value = ''
}
function scrollKeForm() {
  nextTick(() => { if (formSection.value) formSection.value.scrollIntoView({ behavior: 'smooth', block: 'center' }) })
}
function scrollKeSiswa(id) {
  nextTick(() => {
    const el = document.getElementById('siswa-card-' + id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      idTerakhirUpdate.value = id
      if (timeoutHighlight.value) clearTimeout(timeoutHighlight.value)
      timeoutHighlight.value = setTimeout(() => { idTerakhirUpdate.value = null }, 2000)
    }
  })
}
function tampilkanNotif(pesan, tipe = 'success') {
  notif.value = { tampil: true, pesan, tipe }
  setTimeout(() => { notif.value.tampil = false }, 2500)
}

// CRUD
function tambahSiswa() {
  if (!formSiswa.value.nama.trim() || !formSiswa.value.kelas.trim() || !formSiswa.value.tanggalLahir.trim() || !formSiswa.value.namaOrangTua.trim()) {
    popupError.value = { tampil: true, pesan: 'Nama, Kelas, Tanggal Lahir, dan Nama Orang Tua wajib diisi.' }
    return
  }
  popupTambah.value = { tampil: true }
}
function konfirmasiTambah() {
  popupTambah.value = { tampil: false }
  const idBaru = Math.max(...daftarSiswa.value.map(s => s.id), 0) + 1
  const dataBaru = { ...formSiswa.value, id: idBaru }
  daftarSiswa.value.push(dataBaru)
  setSiswaList([...daftarSiswa.value])
  tampilkanNotif('Data siswa berhasil ditambahkan!')
  resetForm()
  scrollKeSiswa(idBaru)
}
function editSiswa(siswa) {
  popupEdit.value = { tampil: true, data: { ...siswa } } // gunakan salinan data agar tidak langsung mengubah
  scrollKeForm()
}
function konfirmasiEdit(hasilEdit) {
  if (!hasilEdit.nama.trim() || !hasilEdit.kelas.trim() || !hasilEdit.tanggalLahir.trim() || !hasilEdit.namaOrangTua.trim()) {
    popupError.value = { tampil: true, pesan: 'Nama, Kelas, Tanggal Lahir, dan Nama Orang Tua wajib diisi.' }
    return
  }
  const idx = daftarSiswa.value.findIndex(s => s.id === hasilEdit.id)
  if (idx !== -1) {
    daftarSiswa.value[idx] = { ...hasilEdit }
    setSiswaList([...daftarSiswa.value])
    tampilkanNotif('Data siswa berhasil diupdate!')
    scrollKeSiswa(hasilEdit.id)
  }
  popupEdit.value = { tampil: false, data: null }
  resetForm()
}
function hapusSiswa(id) {
  popupHapus.value = { tampil: true, id }
  scrollKeForm()
}
function konfirmasiHapus() {
  const id = popupHapus.value.id
  if (!id) {
    tampilkanNotif('ID siswa tidak ditemukan!', 'error')
    return
  }
  popupHapus.value = { tampil: false, id: null }
  const idx = daftarSiswa.value.findIndex(s => s.id === id)
  if (idx !== -1) {
    daftarSiswa.value.splice(idx, 1)
    setSiswaList([...daftarSiswa.value])
    tampilkanNotif('Data siswa berhasil dihapus!')
  } else {
    tampilkanNotif('Data siswa tidak ditemukan!', 'error')
  }
}
function handleFoto(e) {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => formSiswa.value.foto = reader.result
    reader.readAsDataURL(file)
  }
}

const siswaTersaring = computed(() => daftarSiswa.value.filter(s => s.nama.toLowerCase().includes(cari.value.toLowerCase())))

onMounted(async () => {
  // Tidak perlu request ke backend, cukup pakai data lokal
  // Data sudah diinisialisasi di atas
})
</script> 

<style scoped>
.siswa-highlight {
  animation: siswa-glow 2s ease;
  border-width: 4px !important;
  border-color: #facc15 !important; /* yellow-400 */
  box-shadow: 0 0 0 4px #fef08a, 0 0 16px 8px #f472b6;
}
@keyframes siswa-glow {
  0% { box-shadow: 0 0 0 0 #fef08a, 0 0 0 0 #f472b6; }
  50% { box-shadow: 0 0 0 4px #fef08a, 0 0 16px 8px #f472b6; }
  100% { box-shadow: 0 0 0 0 #fef08a, 0 0 0 0 #f472b6; }
}
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