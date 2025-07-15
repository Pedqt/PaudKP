<template>
  <div v-if="show">
    <div class="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm"></div>
    <div class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-full text-center border-4 border-blue-200 w-96">
        <div v-if="icon" class="text-6xl mb-4">{{ icon }}</div>
        <div v-if="title" class="mb-6 text-xl font-bold text-blue-800">{{ title }}</div>
        <div v-if="message" class="mb-6 text-gray-700">{{ message }}</div>
        <slot />
        <div class="flex justify-center gap-4 mt-6">
          <button v-if="showConfirm" @click="$emit('confirm')" class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all">
            <span v-if="confirmIcon" class="mr-2">{{ confirmIcon }}</span>{{ confirmText }}
          </button>
          <button v-if="showCancel" @click="$emit('close')" class="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-bold transition-all">
            <span v-if="cancelIcon" class="mr-2">{{ cancelIcon }}</span>{{ cancelText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  title: String,
  icon: String,
  message: String,
  showConfirm: { type: Boolean, default: true },
  showCancel: { type: Boolean, default: true },
  confirmText: { type: String, default: 'OK' },
  cancelText: { type: String, default: 'Batal' },
  confirmIcon: String,
  cancelIcon: String
})
</script> 