<script setup>
import { useRouter } from "vue-router"

const { back } = useRouter();
</script>

<template>
  <header class="header-main">
    <div class="left">
      <div class="btn-back" @click="back">
        <i class="ri-arrow-left-line"></i>
      </div>
      <div class="left-intern">
        <img src="https://i.pravatar.cc/150?img=33" alt="image profile">
      </div>
      <div class="right-intern">@luposki</div>
    </div>
    <div class="center">MyReb</div>
    <div class="right">

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
  gap: 4px;
}

.left-intern {
  height: 40px;
  width: 40px;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
}
.right-intern {
  flex: 1;
  text-align: left;
  font-weight: bold;
}

.btn-back {
  width: 38px;
  height: 38px;

  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}



.btn-back:hover > i {
  transition: transform ease .4s;
  transform: translateX(-2px);
}
.btn-back:active {
  scale: .95;
}

.btn-back i {
  font-size: 2rem;
}

.left-intern > img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  background-size: cover;
}

.left-intern > img:hover {
  transition: all ease-in-out .4s;
  scale: 1.2;
}

@media (max-width: 474px) {
  .center {
    display: none;
  }

  .right-intern {
    font-size: 1.4rem;
  }
}

</style>