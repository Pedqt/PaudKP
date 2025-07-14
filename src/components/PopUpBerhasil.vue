<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white rounded-3xl shadow-2xl p-8 w-96 text-center border-4 border-green-200 animate-bounce">
      <div class="text-6xl mb-4">🎉</div>
      <h2 class="text-2xl font-bold text-green-800 mb-4">Berhasil!</h2>
      <p class="mb-6 text-lg text-gray-700">{{ message }}</p>
      <button @click="closePopup" class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
        <span class="mr-2">✅</span> Tutup
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUpBerhasil',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      default: 'Aksi berhasil dilakukan.'
    }
  },
  emits: ['close'],
  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
</style>
