<script setup lang="ts">
const toolSet = ['logo.svg', 'tailwindcss.svg', 'c++.svg', 'javascript.svg']
</script>

<template>
  <main>
    <div>
      <h2 class="">My tool set</h2>
      <div class="flex flex-row">
        <img
          v-for="tool in toolSet"
          :key="tool"
          :src="'src/assets/' + tool"
          alt="Tool-Logo"
          class="w-12 mr-3"
        />
      </div>
    </div>
  </main>
</template>
