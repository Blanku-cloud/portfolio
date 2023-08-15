<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'

const target = ref()
const sticking = ref(false)

const observer = new IntersectionObserver(
  ([entry]) => {
    console.log(entry)
    console.log(entry.isIntersecting)
    sticking.value = !entry.isIntersecting
  },
  { threshold: 0.0 }
)

onMounted(() => {
  observer.observe(target.value)
})
</script>

<template>
  <div class="font-rubik bg-bg-black">
    <header ref="target"><NavBar :class="{ 'sticky top-0': sticking }" /></header>
    <RouterView />
  </div>
</template>
