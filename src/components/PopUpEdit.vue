<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
    <div class="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
      <h2 class="text-xl font-semibold mb-4">Edit Data</h2>
      <form @submit.prevent="submitEdit" class="space-y-4">
        <div v-for="(value, key) in formData" :key="key" class="text-left">
          <label :for="key" class="block text-sm font-medium text-gray-700 mb-1 capitalize">{{ key }}</label>
          <input
            v-model="formData[key]"
            :id="key"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
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
  name: 'PopUpEdit',
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
    }
  }
}
</script>

<style scoped>
</style>
