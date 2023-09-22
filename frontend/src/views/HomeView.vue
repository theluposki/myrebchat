<script setup>
import HeaderM from "../components/layout/main/header.vue"
import MainM from "../components/layout/main/main.vue"
</script>

<template>
  <main class="home">
    <HeaderM/>
    <MainM />
  </main>
</template>

<style scoped>
.home {
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
</style>
