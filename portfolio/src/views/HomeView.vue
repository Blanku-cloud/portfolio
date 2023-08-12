<script setup lang="ts">
import HomeHeader from '../components/HomeHeader.vue'
import HomeBody from '../components/HomeBody.vue'
const deconstructWord = 'Scroll'.split('')
</script>

<template>
  <div class="bg-emerald-200">
    <header>
      <HomeHeader></HomeHeader>
    </header>
    <div>
      <h3>
        <span class="mr-1" v-for="word in deconstructWord" :key="word">{{ word }}</span>
      </h3>
    </div>
    <main>
      <HomeBody></HomeBody>
    </main>
    <footer></footer>
  </div>
</template>
