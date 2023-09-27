<template>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.main {
  background-color: var(--color-background-soft);
  flex: 1;
  display: flex;
  max-height: calc(100vh - 120px);
}
</style>