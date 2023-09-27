<script setup>
import HeaderM from "../../components/layout/main/header.vue"
import MainM from "../../components/layout/main/main.vue"
import NavM from "../../components/layout/main/nav.vue"
</script>

<template>
  <main class="home">
    <HeaderM/>
    <MainM />
    <NavM />
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
