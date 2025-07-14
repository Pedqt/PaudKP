<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50">
    <Navbar />
    <main class="min-h-screen">
      <transition
        name="page"
        mode="out-in"
        appear
      >
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.page-enter-active, .page-leave-active {
  @apply transition-all duration-500;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
}
.page-enter-to, .page-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style> 