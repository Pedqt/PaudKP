<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
    <!-- <Navbar /> -->
    <div class="py-8">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Judul utama dashboard guru -->
      <div class="mb-8 text-center">
            <div class="inline-block bg-white rounded-full p-4 shadow-lg mb-4">
              <span class="text-4xl">🎓</span>
            </div>
            <h1 class="text-4xl font-bold text-purple-800 mb-2">Dashboard Guru</h1>
        <p class="text-lg text-purple-600">Kelola data siswa dan input nilai dengan mudah</p>
          </div>
          <!-- Form Section dengan desain kartu yang menarik -->
            <div ref="formSection" class="bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-yellow-200">
              <div class="flex items-center mb-6">
                <span class="text-3xl mr-3">{{ form.id ? '✏️' : '➕' }}</span>
                <h2 class="text-2xl font-bold text-purple-800">
                  {{ form.id ? 'Edit Data Siswa' : 'Tambah Siswa Baru' }}
                </h2>
              </div>
              
              <form @submit.prevent="tambahSiswa" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                    <label class="block text-sm font-bold text-blue-800 mb-2">👤 Nama Lengkap</label>
                    <input 
                      v-model="form.nama" 
                      placeholder="Masukkan nama lengkap siswa" 
                      class="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-400 transition-all"
                      required
                    />
                  </div>
                  <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
                    <label class="block text-sm font-bold text-green-800 mb-2">🏫 Kelas</label>
                    <select 
                      v-model="form.kelas" 
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
                      v-model="form.tanggalLahir" 
                      type="date" 
                      class="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-400 transition-all"
                    />
                  </div>
                  <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl">
                    <label class="block text-sm font-bold text-orange-800 mb-2">👨‍👩‍👧‍👦 Nama Orang Tua</label>
                    <input 
                      v-model="form.namaOrangTua" 
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
                    <select v-model="form.nilai" class="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-400 transition-all">
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
                    <textarea v-model="form.catatan" placeholder="Catatan untuk Siswa" class="w-full px-4 py-3 border-2 border-yellow-200 rounded-xl focus:ring-4 focus:ring-yellow-300 focus:border-yellow-400 transition-all"></textarea>
                  </div>
                </div>

                <div class="flex gap-4 pt-4">
                  <button 
                    type="submit" 
                    class="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                    :disabled="isLoading"
                  >
                    <span v-if="isLoading" class="flex items-center justify-center">
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
                    v-model="search" 
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
                v-for="siswa in filteredSiswa" 
                :key="siswa.id_siswa || siswa.id" 
                :id="'siswa-card-' + (siswa.id_siswa || siswa.id)"
                :class="[(lastUpdatedId === (siswa.id_siswa || siswa.id)) ? 'siswa-highlight' : '', 'bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 border-4 border-transparent hover:border-yellow-300']"
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
                      <span class="ml-1 text-purple-600 font-semibold">{{ formatDate(siswa.tanggalLahir) }}</span>
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
            <div v-if="filteredSiswa.length === 0" class="text-center py-16">
              <div class="bg-white rounded-2xl shadow-xl p-12 border-4 border-yellow-200">
                <div class="text-8xl mb-6">📚</div>
                <h3 class="text-2xl font-bold text-purple-800 mb-4">
                  {{ search ? 'Tidak ada siswa yang ditemukan' : 'Belum ada data siswa' }}
                </h3>
                <p class="text-lg text-gray-600 mb-6">
                  {{ search ? 'Coba ubah kata kunci pencarian' : 'Mulai dengan menambahkan siswa baru di atas!' }}
                </p>
                <div class="text-4xl">🎨 🌟 🎓</div>
              </div>
            </div>

            <!-- Notification yang menarik -->
            <div 
              v-if="notif.show"
              :class="[
                'fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 rounded-2xl shadow-2xl text-white font-bold text-lg transition-all animate-bounce',
                notif.type === 'success' ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-500 to-red-600'
              ]"
            >
              <span class="mr-2">{{ notif.type === 'success' ? '✅' : '❌' }}</span>
              {{ notif.message }}
            </div>

            <!-- Popup Konfirmasi Hapus yang menarik -->
            <div v-if="popupHapus.show">
              <div class="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm"></div>
              <div class="fixed inset-0 z-50 flex items-center justify-center">
                <div class="bg-white rounded-2xl shadow-2xl p-8 w-96 text-center border-4 border-red-200">
                  <div class="text-6xl mb-4">⚠️</div>
                  <div class="mb-6 text-xl font-bold text-red-800">Yakin ingin menghapus data siswa ini?</div>
                  <div class="flex justify-center gap-4">
                    <button @click="konfirmasiHapus" class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
                      <span class="mr-2">🗑️</span> Ya, Hapus
                    </button>
                    <button @click="popupHapus.show = false" class="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
                      <span class="mr-2">❌</span> Batal
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Popup Konfirmasi Edit yang menarik -->
            <div v-if="popupEdit.show">
              <div class="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm"></div>
              <div class="fixed inset-0 z-50 flex items-center justify-center">
                <div class="bg-white rounded-2xl shadow-2xl p-8 w-96 text-center border-4 border-blue-200">
                  <div class="text-6xl mb-4">✏️</div>
                  <div class="mb-6 text-xl font-bold text-blue-800">Edit Data Siswa</div>
                  <form @submit.prevent="konfirmasiEdit" class="space-y-4">
                    <input v-model="form.nama" placeholder="Nama Siswa" class="w-full px-4 py-2 border rounded" required />
                    <input v-model="form.kelas" placeholder="Kelas" class="w-full px-4 py-2 border rounded" required />
                    <input v-model="form.tanggalLahir" type="date" class="w-full px-4 py-2 border rounded" required />
                    <input v-model="form.namaOrangTua" placeholder="Nama Orang Tua" class="w-full px-4 py-2 border rounded" required />
                    <!-- Field nilai dan catatan -->
                    <select v-model="form.nilai" class="w-full px-4 py-2 border rounded">
                      <option value="">Pilih Nilai</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                    </select>
                    <textarea v-model="form.catatan" placeholder="Catatan untuk Siswa" class="w-full px-4 py-2 border rounded"></textarea>
                    <div class="flex justify-center gap-4 mt-4">
                      <button type="submit" class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-xl font-bold transition-all">Simpan</button>
                      <button type="button" @click="popupEdit.show = false" class="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-2 rounded-xl font-bold transition-all">Batal</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- Popup Konfirmasi Tambah yang menarik -->
            <div v-if="popupTambah.show">
              <div class="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm"></div>
              <div class="fixed inset-0 z-50 flex items-center justify-center">
                <div class="bg-white rounded-2xl shadow-2xl p-8 w-[400px] max-w-full text-center border-4 border-green-200">
                  <div class="text-6xl mb-4">📝</div>
                  <div class="mb-6 text-xl font-bold text-green-800">Tinjau Data Siswa</div>
                  <div class="text-left text-gray-700 mb-6 space-y-3 bg-gray-50 p-4 rounded-xl">
                    <div class="flex items-center"><span class="mr-2">👤</span><span class="font-medium">Nama:</span> <span class="ml-2 text-purple-600 font-semibold">{{ form.nama }}</span></div>
                    <div class="flex items-center"><span class="mr-2">🏫</span><span class="font-medium">Kelas:</span> <span class="ml-2 text-purple-600 font-semibold">{{ form.kelas }}</span></div>
                    <div v-if="form.tanggalLahir" class="flex items-center"><span class="mr-2">🎂</span><span class="font-medium">Tanggal Lahir:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formatDate(form.tanggalLahir) }}</span></div>
                    <div v-if="form.namaOrangTua" class="flex items-center"><span class="mr-2">👨‍👩‍👧‍👦</span><span class="font-medium">Orang Tua:</span> <span class="ml-2 text-purple-600 font-semibold">{{ form.namaOrangTua }}</span></div>
                    <div v-if="form.foto" class="flex items-center">
                      <span class="mr-2">📸</span><span class="font-medium">Foto:</span><br>
                      <img :src="form.foto" alt="Foto Siswa" class="w-24 h-24 object-cover rounded-xl mx-auto mt-2 border-2 border-purple-200" />
                    </div>
                    <div v-if="form.nilai !== undefined && form.nilai !== ''" class="flex items-center">
                      <span class="mr-2">📊</span><span class="font-medium">Nilai:</span> <span class="ml-2 text-purple-600 font-semibold">{{ form.nilai }}</span>
                    </div>
                    <div v-if="form.catatan !== undefined && form.catatan !== ''" class="flex items-center">
                      <span class="mr-2">📝</span><span class="font-medium">Catatan:</span> <span class="ml-2 text-purple-600 font-semibold">{{ form.catatan }}</span>
                    </div>
                  </div>
                  <div class="flex justify-center gap-4">
                    <button @click="konfirmasiTambah" class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
                      <span class="mr-2">➕</span> Ya, Tambah
                    </button>
                    <button @click="popupTambah.show = false" class="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
                      <span class="mr-2">❌</span> Batal
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Popup Konfirmasi Update yang menarik -->
            <div v-if="popupUpdate.show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div class="bg-white rounded-2xl shadow-2xl p-8 w-[400px] max-w-full text-center border-4 border-blue-200">
                <div class="text-6xl mb-4">🔄</div>
                <div class="mb-6 text-xl font-bold text-blue-800">Tinjau Data Siswa yang Akan Diupdate</div>
                <div class="text-left text-gray-700 mb-6 space-y-3 bg-gray-50 p-4 rounded-xl">
                  <div class="flex items-center"><span class="mr-2">👤</span><span class="font-medium">Nama:</span> <span class="ml-2 text-purple-600 font-semibold">{{ form.nama }}</span></div>
                  <div class="flex items-center"><span class="mr-2">🏫</span><span class="font-medium">Kelas:</span> <span class="ml-2 text-purple-600 font-semibold">{{ form.kelas }}</span></div>
                  <div v-if="form.tanggalLahir" class="flex items-center"><span class="mr-2">🎂</span><span class="font-medium">Tanggal Lahir:</span> <span class="ml-2 text-purple-600 font-semibold">{{ formatDate(form.tanggalLahir) }}</span></div>
                  <div v-if="form.namaOrangTua" class="flex items-center"><span class="mr-2">👨‍👩‍👧‍👦</span><span class="font-medium">Orang Tua:</span> <span class="ml-2 text-purple-600 font-semibold">{{ form.namaOrangTua }}</span></div>
                  <div v-if="form.foto" class="flex items-center">
                    <span class="mr-2">📸</span><span class="font-medium">Foto:</span><br>
                    <img :src="form.foto" alt="Foto Siswa" class="w-24 h-24 object-cover rounded-xl mx-auto mt-2 border-2 border-purple-200" />
                  </div>
                  <div v-if="form.nilai !== undefined && form.nilai !== ''" class="flex items-center">
                    <span class="mr-2">📊</span><span class="font-medium">Nilai:</span> <span class="ml-2 text-purple-600 font-semibold">{{ form.nilai }}</span>
                  </div>
                  <div v-if="form.catatan !== undefined && form.catatan !== ''" class="flex items-center">
                    <span class="mr-2">📝</span><span class="font-medium">Catatan:</span> <span class="ml-2 text-purple-600 font-semibold">{{ form.catatan }}</span>
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
            <div v-if="popupError.show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div class="bg-white rounded-2xl shadow-2xl p-8 w-96 text-center border-4 border-red-200">
                <div class="text-6xl mb-4">❗</div>
                <div class="mb-6 text-xl font-bold text-red-800">{{ popupError.message }}</div>
                <button @click="popupError.show = false" class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
                  <span class="mr-2">✅</span> Tutup
                </button>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, reactive } from 'vue'
// import Navbar from '../components/Navbar.vue'
import { getNilaiSiswa, setNilaiSiswa, getSiswaList, setSiswaList } from '../utils/localStorage.js'

// Data siswaList: gunakan localStorage saja, tanpa data dummy
const siswaList = ref(getSiswaList())

// Tambahkan state untuk nilai dan catatan pada form edit
const form = ref({ 
  id: null, 
  nama: '', 
  kelas: '', 
  foto: '', 
  tanggalLahir: '',
  namaOrangTua: '',
  nilai: '',
  catatan: ''
})
const search = ref('')
const isLoading = ref(false)
const notif = ref({ show: false, message: '', type: '' })
const popupHapus = ref({ show: false, id: null })
const popupEdit = ref({ show: false, siswa: null })
const popupTambah = ref({ show: false })
const popupError = ref({ show: false, message: '' })
const popupUpdate = ref({ show: false })
const fotoInput = ref(null)
const formSection = ref(null)
const lastUpdatedId = ref(null)
const highlightTimeout = ref(null)

const activeTab = ref('data')

// Nilai siswa (sinkron dengan localStorage, id siswa)
const nilaiSiswa = reactive({})
const notifNilai = reactive({ show: false, message: '', type: '' })
const catatanSiswa = reactive({})

function toDateInputValue(dateStr) {
  if (!dateStr) return ''
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr
  const d = new Date(dateStr)
  return d.toISOString().slice(0, 10)
}

const showNotif = (message, type = 'success') => {
  notif.value = { show: true, message, type }
  setTimeout(() => {
    notif.value.show = false
  }, 2500)
}

const ambilData = async () => {
  // Tidak perlu request ke backend, cukup pakai data lokal
  // Data sudah diinisialisasi di atas
}

function scrollToForm() {
  nextTick(() => {
    if (formSection.value) {
      formSection.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  })
}

function scrollToSiswa(id) {
  nextTick(() => {
    const el = document.getElementById('siswa-card-' + id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      lastUpdatedId.value = id
      if (highlightTimeout.value) clearTimeout(highlightTimeout.value)
      highlightTimeout.value = setTimeout(() => {
        lastUpdatedId.value = null
      }, 2000)
    }
  })
}

// --- TAMBAH SISWA ---
const tambahSiswa = async () => {
  if (!form.value.nama?.trim() || !form.value.kelas?.trim() || !form.value.tanggalLahir?.trim() || !form.value.namaOrangTua?.trim()) {
    popupError.value = { show: true, message: 'Nama, Kelas, Tanggal Lahir, dan Nama Orang Tua wajib diisi.' }
    return
  }
  // Tampilkan popup konfirmasi tambah
  popupTambah.value = { show: true }
}

// --- KONFIRMASI TAMBAH ---
const konfirmasiTambah = async () => {
  popupTambah.value = { show: false }
  // Tambah siswa baru
  const newId = Math.max(...siswaList.value.map(s => s.id), 0) + 1
  const dataKirim = {
    id: newId,
    nama: form.value.nama.trim(),
    kelas: form.value.kelas.trim(),
    tanggalLahir: form.value.tanggalLahir.trim(),
    namaOrangTua: form.value.namaOrangTua.trim(),
    foto: form.value.foto || '',
    nilai: form.value.nilai || '',
    catatan: form.value.catatan || ''
  }
  siswaList.value.push(dataKirim)
  setSiswaList([...siswaList.value])
  showNotif('Data siswa berhasil ditambahkan!', 'success')
  resetForm()
  scrollToSiswa(newId)
}

// --- EDIT SISWA ---
const editSiswa = (siswa) => {
  const allNilai = getNilaiSiswa()
  form.value = {
    ...siswa,
    tanggalLahir: toDateInputValue(siswa?.tanggalLahir),
    id: siswa.id_siswa || siswa.id || null,
    nilai: allNilai[siswa.id_siswa || siswa.id]?.nilai || '',
    catatan: allNilai[siswa.id_siswa || siswa.id]?.catatan || ''
  }
  // Tampilkan popup konfirmasi edit
  popupEdit.value = { show: true, siswa }
  scrollToForm()
}

// --- KONFIRMASI EDIT ---
const konfirmasiEdit = () => {
  if (!form.value.nama?.trim() || !form.value.kelas?.trim() || !form.value.tanggalLahir?.trim() || !form.value.namaOrangTua?.trim()) {
    popupError.value = { show: true, message: 'Nama, Kelas, Tanggal Lahir, dan Nama Orang Tua wajib diisi.' }
    return
  }
  const dataKirim = {
    id: form.value.id,
    nama: form.value.nama.trim(),
    kelas: form.value.kelas.trim(),
    tanggalLahir: form.value.tanggalLahir.trim(),
    namaOrangTua: form.value.namaOrangTua.trim(),
    foto: form.value.foto || '',
    nilai: form.value.nilai || '',
    catatan: form.value.catatan || ''
  }
  const index = siswaList.value.findIndex(s => s.id === form.value.id)
  if (index !== -1) {
    siswaList.value[index] = { ...dataKirim }
    setSiswaList([...siswaList.value])
    showNotif('Data siswa berhasil diupdate!', 'success')
    scrollToSiswa(form.value.id)
  }
  popupEdit.value = { show: false, siswa: null }
  resetForm()
}

// --- HAPUS SISWA ---
const hapusSiswa = (id) => {
  popupHapus.value = { show: true, id }
  scrollToForm()
}

// --- KONFIRMASI HAPUS ---
const konfirmasiHapus = async () => {
  const id = popupHapus.value.id
  if (!id) {
    showNotif('ID siswa tidak ditemukan!', 'error')
    return
  }
  popupHapus.value = { show: false, id: null }
  const index = siswaList.value.findIndex(s => s.id === id)
  if (index !== -1) {
    siswaList.value.splice(index, 1)
    setSiswaList([...siswaList.value])
    showNotif('Data siswa berhasil dihapus!', 'success')
  } else {
    showNotif('Data siswa tidak ditemukan!', 'error')
  }
}

const resetForm = () => {
  form.value = { 
    id: null, 
    nama: '', 
    kelas: '', 
    foto: '', 
    tanggalLahir: '',
    namaOrangTua: '',
    nilai: '',
    catatan: ''
  }
  if (fotoInput.value) {
    fotoInput.value.value = ''
  }
}

const handleFoto = (e) => {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => form.value.foto = reader.result
    reader.readAsDataURL(file)
}
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const filteredSiswa = computed(() =>
  siswaList.value.filter(s =>
    s.nama.toLowerCase().includes(search.value.toLowerCase())
  )
)

const daftarNilaiTersimpan = computed(() => {
  const allNilai = getNilaiSiswa()
  return siswaList.value
    .filter(s => allNilai[s.id_siswa || s.id] !== undefined && allNilai[s.id_siswa || s.id] !== "")
    .map(s => ({
      id: s.id_siswa || s.id,
      nama: s.nama,
      nilai: allNilai[s.id_siswa || s.id]?.nilai || '',
      komentar: allNilai[s.id_siswa || s.id]?.catatan || ''
    }))
})

onMounted(ambilData)

function simpanNilai(id) {
  if (nilaiSiswa[id] === undefined || nilaiSiswa[id] === "") {
    notifNilai.show = true
    notifNilai.message = 'Nilai tidak boleh kosong!'
    notifNilai.type = 'error'
    setTimeout(() => notifNilai.show = false, 1500)
    return
  }
  const allNilai = getNilaiSiswa()
  allNilai[id] = { nilai: nilaiSiswa[id], catatan: catatanSiswa[id] || '' }
  setNilaiSiswa(allNilai)
  notifNilai.show = true
  notifNilai.message = 'Nilai berhasil disimpan!'
  notifNilai.type = 'success'
  setTimeout(() => notifNilai.show = false, 1500)
}
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