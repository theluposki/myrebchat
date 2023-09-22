<template>
  <header class="header-main">
    <div class="left"></div>
    <div class="center">MyReb</div>
    <div class="right">
      <div class="left-intern">@luposki</div>
      <div class="right-intern">
        <img src="https://i.pravatar.cc/150?img=33" alt="image profile">
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
  font-size: 1.6rem;
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
  flex: 1;
  text-align: right;
  font-weight: bold;
}
.right-intern {
  height: 40px;
  width: 40px;
  overflow: hidden;
  background-color: tomato;
  border-radius: 4px;
  cursor: pointer;
}

.right-intern > img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  background-size: cover;
}

.right-intern > img:hover {
  transition: all ease-in-out .4s;
  scale: 1.2;
}

</style>