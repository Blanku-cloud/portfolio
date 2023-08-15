<script setup lang="ts">
import { RouterLink } from 'vue-router'
const navComponents = [
  { name: 'Home', route: '' },
  { name: 'About', route: 'about' }
]
</script>

<template>
  <nav class="opacity-95 mx-5 py-5">
    <RouterLink
      class="mx-1.5 text-tainted-white text-2xl"
      v-for="components in navComponents"
      :key="components.name"
      :to="'/' + components.route"
      >{{ components.name }}</RouterLink
    >
  </nav>
</template>
