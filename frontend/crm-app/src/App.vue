<template>
  <div class="flex flex-col min-h-screen">
    <!-- Основной контент -->
    <main class="flex-grow">
      <router-view/>
    </main>
<!--    <Footer/>-->
  </div>
</template>

<script setup lang="ts">
import {defineComponent} from 'vue'
import Footer from '@/components/Footer/Footer.vue'

defineComponent({
  name: 'App',
  components() {
    return {
      Footer
    }
  },
  setup() {
  }
})
</script>

<style scoped lang="scss"></style>
