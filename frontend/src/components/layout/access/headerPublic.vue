<script setup>
import { RouterLink, useRouter } from "vue-router"

const { push } = useRouter();

const goLink = (path) => {
  push(path);
};
</script>
<template>
  <header class="header-main">
    <div class="left"></div>
    <div class="center">MyReb</div>
    <div class="right">
      <div class="left-intern">
        <RouterLink class="link" to="sign-up">
          cadastrar-se
        </RouterLink>
      </div>
      <div class="right-intern">
        <button class="btn" @click="goLink('/sign-in')">
          Acessar
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-main {
  position: sticky;
  top: 0;
  left: 0;
  min-height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;

  background-color: var(--color-background);
}

.left {
  flex: 1;
  min-height: 40px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
}
.center {
  width: 100px;
  max-width: 100px;
  min-height: 40px;
  max-height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Fredericka the Great', cursive;
  font-size: 2.6rem;
  color: var(--primary);
}
.right {
  flex: 1;
  min-height: 40px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}

.left-intern {
  flex: 1;
  text-align: right;
  font-weight: bold;
}

.link {
  text-decoration: none;
  font-size: 14px;
  color: var(--color-text-soft);
}
.right-intern {
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.right-intern > img:hover {
  transition: all ease-in-out .4s;
  scale: 1.2;
}

@media (max-width: 534px) {
  .left-intern {
    display: none;
  }
}

</style>