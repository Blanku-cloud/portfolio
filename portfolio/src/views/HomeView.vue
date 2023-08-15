<script setup lang="ts">
import HomeHeader from '../components/HomeHeader.vue'
import HomeBody from '../components/HomeBody.vue'
const deconstructWord = 'Scroll'.split('')
</script>

<template>
  <div class="mx-5">
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
      <img
        src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
        alt=""
        srcset=""
      />
    </main>
    <footer></footer>
  </div>
</template>
