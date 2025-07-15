<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50">
    <div class="bg-white rounded-2xl shadow-2xl p-8 w-96 text-center border-4 border-blue-200">
      <h2 class="text-2xl font-bold text-blue-800 mb-4">Edit Data Siswa</h2>
      <form @submit.prevent="submitEdit" class="space-y-4 text-left">
        <div>
          <label class="block text-sm font-bold text-blue-800 mb-1">Nama Lengkap</label>
          <input v-model="formData.nama" type="text" class="w-full px-4 py-2 border rounded" required />
        </div>
        <div>
          <label class="block text-sm font-bold text-green-800 mb-1">Kelas</label>
          <select v-model="formData.kelas" class="w-full px-4 py-2 border rounded" required>
            <option value="">Pilih Kelas</option>
            <option value="TK A">Kelas A</option>
            <option value="TK B">Kelas B</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-bold text-pink-800 mb-1">Tanggal Lahir</label>
          <input v-model="formData.tanggalLahir" type="date" class="w-full px-4 py-2 border rounded" required />
        </div>
        <div>
          <label class="block text-sm font-bold text-orange-800 mb-1">Nama Orang Tua</label>
          <input v-model="formData.namaOrangTua" type="text" class="w-full px-4 py-2 border rounded" required />
        </div>
        <div>
          <label class="block text-sm font-bold text-purple-800 mb-1">Foto Siswa</label>
          <input type="file" @change="handleFoto" accept="image/*" class="w-full px-4 py-2 border rounded" />
          <div v-if="formData.foto" class="mt-2 flex justify-center">
            <img :src="formData.foto" alt="Foto Siswa" class="w-24 h-24 object-cover rounded-xl border-2 border-purple-200" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-bold text-green-800 mb-1">Nilai Siswa</label>
          <select v-model="formData.nilai" class="w-full px-4 py-2 border rounded">
            <option value="">Pilih Nilai</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-bold text-yellow-800 mb-1">Catatan untuk Siswa</label>
          <textarea v-model="formData.catatan" class="w-full px-4 py-2 border rounded"></textarea>
        </div>
        <div class="flex justify-end gap-2 mt-6">
          <button type="button" @click="$emit('batal')" class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded">Batal</button>
          <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Simpan</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUpEditData',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  emits: ['simpan', 'batal'],
  data() {
    return {
      formData: { ...this.data }
    }
  },
  watch: {
    data: {
      handler(newVal) {
        this.formData = { ...newVal }
      },
      deep: true
    }
  },
  methods: {
    submitEdit() {
      this.$emit('simpan', { ...this.formData })
    },
    handleFoto(e) {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => this.formData.foto = reader.result
        reader.readAsDataURL(file)
      }
    }
  }
}
</script>

<style scoped>
</style>
