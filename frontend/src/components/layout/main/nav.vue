<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="wrapper">
    <nav class="nav-main">
      <RouterLink class="nav-item" exact-active-class="active" to="/">
        <i class="ri-profile-line"></i>
        <span>início</span>
      </RouterLink>
      <RouterLink class="nav-item" exact-active-class="active" to="/chats">
        <i class="ri-question-answer-fill"></i>
        <span>chats</span>
      </RouterLink>
      <RouterLink class="nav-item" exact-active-class="active" to="/config">
        <i class="ri-tools-line"></i>
        <span>config</span>
      </RouterLink>

    </nav>
  </div>
</template>

<style scoped>
.nav-main {
  height: 60px;
  max-height: 60px;
  background-color: var(--color-background);

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 12px;
}

.nav-item {
  min-width: 48px;
  max-width: 48px;
  min-height: 48px;
  max-height: 48px;

  border-radius: 4px;
  text-decoration: none;
  color: var(--color-text);
  font-weight: bold;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px;
}

.nav-item:hover {
  transition: all ease-in-out .4s;
  box-shadow: inset 0 0 3px var(--color-text);
}

.nav-item:active {
  scale: .95;
}

.active {
  box-shadow: inset 0 0 3px var(--primary);
}

.nav-item > i {
  font-size: 2.2rem;
  width: 48px;
  max-height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item > span {
  max-height: 16px;
  font-size: 1.2rem;
  display: none;
}

.active > span {
  display: flex;
  color: var(--primary);
}

.active > i {
  color: var(--primary);
  text-shadow: -1px 1px 1px #000;
}

.active:hover {
  transition: box-shadow ease .1s;
  box-shadow: inset 0 0 3px var(--color-text);
}

.active:active {
  scale: .9;
  box-shadow: inset 0 0 3px var(--color-text), 1px 1px 2px var(--color-text);
}
</style>
