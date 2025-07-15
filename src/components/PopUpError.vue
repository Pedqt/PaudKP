<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white rounded-3xl shadow-2xl p-8 w-96 text-center border-4 border-red-200 animate-bounce">
      <div class="text-6xl mb-4">❌</div>
      <h2 class="text-2xl font-bold text-red-800 mb-4">Oops! Gagal</h2>
      <p class="mb-6 text-lg text-gray-700">{{ message }}</p>
      <button @click="closePopup" class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
        <span class="mr-2">🔄</span> Coba Lagi
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUpError',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      default: 'Aksi gagal dilakukan.'
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
