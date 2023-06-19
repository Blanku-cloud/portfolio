<script setup lang="ts">
import HomeHeader from '../components/HomeHeader.vue'
import HomeBody from '../components/HomeBody.vue'
const deconstructWord = ['S', 'r', 'o', 'l', 'l']
</script>

<template>
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
</template>
