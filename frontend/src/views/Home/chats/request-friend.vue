<script setup>
import headerAddFriend from "../../../components/layout/chat/headerAddFriend.vue";
import { useRouter } from "vue-router";

const { push } = useRouter();

const goLink = (path) => {
  push(path);
};
</script>

<template>
  <div class="wrapper-add-friend">
    <headerAddFriend />
    <ul class="list-new-friend">

      <div class="header-actions">
        <div class="left">
          <input type="text" tabindex="1" class="input" placeholder="pesquisar nickname" />
          <button class="btn-icons" tabindex="2">
            <i class="ri-search-2-line"></i>
          </button>
        </div>
        <div class="right">
          <button class="btn-icons requests" data-count="10" tabindex="3">
            <i class="ri-user-received-2-line"></i>
          </button>
          <button class="btn-icons accepted" data-count="5" tabindex="3">
            <i class="ri-user-follow-line"></i>
          </button>
          <button class="btn-icons rejected" data-count="3" tabindex="3">
            <i class="ri-user-unfollow-line"></i>
          </button>
          
        </div>
      </div>

      <li class="item-chats">
        <div class="wrapper-img offline">
          <img
            src="https://i.pravatar.cc/150?img=38"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">monique</span>
          </div>
          <div class="wrapper-btns">
            <button class="btn-icons">
              <i class="ri-user-unfollow-line"></i>
            </button>
            <button class="btn-icons">
              <i class="ri-user-follow-line"></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper-add-friend {
  flex: 1;
  background-color: var(--color-background-soft);
  max-height: 100vh;

  display: flex;
  flex-direction: column;
}

.list-new-friend {
  flex: 1;
  max-height: calc(100vh - 60px);
  padding: 2px 0;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;

  display: flex;
  flex-direction: column;
  gap: 12;
}

.header-actions {
  background-color: var(--color-background);
  min-height: 50px;

  display: flex;
  align-items: center;
  gap: 4px;

  padding: 0 8px;
}

.left {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4px;
}

.right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}

.item-chats {
  background-color: var(--color-background);
  padding: 8px;
  display: flex;
  gap: 12px;
  cursor: pointer;
  box-shadow: 0 0 1px var(--color-text);
}

.list-chats:hover > :not(:hover) {
  transition: all ease 0.4s;
  filter: grayscale(1);
}

.wrapper-img {
  width: 60px;
  height: 60px;
  background-color: #ddd;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.online {
  background-color: #46ff75;
  box-shadow: 0 0 4px var(--color-text);
}

.offline {
  background-color: #ddd;
}
.wrapper-img img {
  width: 54px;
  height: 54px;
  border-radius: 4px;
  box-shadow: 0 0 1px var(--color-text);
}

.wrapper-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrapper-nickname {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrapper-btns {
  display: flex;
  align-items: center;
  gap: 22px;
}

.requests, .accepted, .rejected {
  position: relative;
}
.requests::after {
  content: attr(data-count);
  position: absolute;
  top: -5px;
  right: -5px;

  background-color: var(--yellow);
  padding: 1px 2px;
  border-radius: 4px;
  color: #fff;
  box-shadow: -1px 1px 2px var(--color-text);
  text-shadow: -1px 1px 1px #000;
  font-weight: bold;

  font-size: 1rem;
}

.accepted::after {
  content: attr(data-count);
  position: absolute;
  top: -5px;
  right: -5px;

  background-color: var(--primary);
  padding: 1px 2px;
  border-radius: 4px;
  color: #fff;
  box-shadow: -1px 1px 2px var(--color-text);
  text-shadow: -1px 1px 1px #000;
  font-weight: bold;

  font-size: 1rem;
}

.rejected::after {
  content: attr(data-count);
  position: absolute;
  top: -5px;
  right: -5px;

  background-color: var(--danger);
  padding: 1px 2px;
  border-radius: 4px;
  color: #fff;
  box-shadow: -1px 1px 2px var(--color-text);
  text-shadow: -1px 1px 1px #000;
  font-weight: bold;
  font-size: 1rem;
}


.wrapper-btns > .btn-icons:nth-child(1) {
  background-color: var(--danger);
  color: #fff;
  text-shadow: -1px 1px 1px #000;
}
.wrapper-btns > .btn-icons:nth-child(2) {
  background-color: var(--primary);
  color: #fff;
  text-shadow: -1px 1px 1px #000;
}


.nickname {
  font-weight: 600;
}
.last-message {
  font-size: 1.4rem;
  color: var(--color-muted);
}
.last-time {
  font-size: 1.2rem;
  color: var(--color-muted);
}

@media (max-width: 474px) {
  .list-chats:hover > :not(:hover) {
    filter: grayscale(0);
  }
}
</style>
