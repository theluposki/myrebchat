<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const { push } = useRouter();

const wrapperImage = ref(null);

wrapperImage.value = "wrapper-img online";

const goLink = (path) => {
  push(path);
};
</script>

<template>
  <div class="chatsView">

    <div class="header-actions">
      <div class="left">
        <input type="text" tabindex="1" class="input" placeholder="pesquisa" />
        <button class="btn-icons" tabindex="2">
          <i class="ri-search-2-line"></i>
        </button>
      </div>
      <div class="right">
        <button class="btn-icons requests" data-count="2" tabindex="3" @click="goLink('/request-friend')">
          <i class="ri-user-follow-line"></i>
        </button>
        <button class="btn-icons" tabindex="4" @click="goLink('/add-friend')">
          <i class="ri-user-add-line"></i>
        </button>
      </div>
    </div>


    <ul class="list-chats">
      <li class="item-chats" @click="goLink('/chat')">
        <div :class="wrapperImage">
          <img
            src="https://i.pravatar.cc/150?img=38"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">monique</span>
            <span class="last-time">agora pouco</span>
          </div>

          <span class="last-message"
            >Last Message =D
            asdasdasdasdasdasdasdasdasdasdasdasdasdasdasddasdasdasdas</span
          >
        </div>
      </li>

      <li class="item-chats" @click="goLink('/chat')">
        <div :class="wrapperImage">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">mylena</span>
            <span class="last-time">agora pouco</span>
          </div>

          <div class="wrapper-last-message">
            <span class="last-message">Last Message =D</span>
            <span class="count">10</span>
          </div>
        </div>
      </li>

      <li class="item-chats" @click="goLink('/chat')">
        <div :class="wrapperImage">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">mylena</span>
            <span class="last-time">agora pouco</span>
          </div>

          <div class="wrapper-last-message">
            <span class="last-message">Last Message =D</span>
            <span class="count">10</span>
          </div>
        </div>
      </li>      <li class="item-chats" @click="goLink('/chat')">
        <div :class="wrapperImage">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">mylena</span>
            <span class="last-time">agora pouco</span>
          </div>

          <div class="wrapper-last-message">
            <span class="last-message">Last Message =D</span>
            <span class="count">10</span>
          </div>
        </div>
      </li>      <li class="item-chats" @click="goLink('/chat')">
        <div :class="wrapperImage">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">mylena</span>
            <span class="last-time">agora pouco</span>
          </div>

          <div class="wrapper-last-message">
            <span class="last-message">Last Message =D</span>
            <span class="count">10</span>
          </div>
        </div>
      </li>      <li class="item-chats" @click="goLink('/chat')">
        <div :class="wrapperImage">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">mylena</span>
            <span class="last-time">agora pouco</span>
          </div>

          <div class="wrapper-last-message">
            <span class="last-message">Last Message =D</span>
            <span class="count">10</span>
          </div>
        </div>
      </li>      <li class="item-chats" @click="goLink('/chat')">
        <div :class="wrapperImage">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">mylena</span>
            <span class="last-time">agora pouco</span>
          </div>

          <div class="wrapper-last-message">
            <span class="last-message">Last Message =D</span>
            <span class="count">10</span>
          </div>
        </div>
      </li>      <li class="item-chats" @click="goLink('/chat')">
        <div :class="wrapperImage">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">mylena</span>
            <span class="last-time">agora pouco</span>
          </div>

          <div class="wrapper-last-message">
            <span class="last-message">Last Message =D</span>
            <span class="count">10</span>
          </div>
        </div>
      </li>      <li class="item-chats" @click="goLink('/chat')">
        <div :class="wrapperImage">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">mylena</span>
            <span class="last-time">agora pouco</span>
          </div>

          <div class="wrapper-last-message">
            <span class="last-message">Last Message =D</span>
            <span class="count">10</span>
          </div>
        </div>
      </li>      <li class="item-chats" @click="goLink('/chat')">
        <div :class="wrapperImage">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">mylena</span>
            <span class="last-time">agora pouco</span>
          </div>

          <div class="wrapper-last-message">
            <span class="last-message">Last Message =D</span>
            <span class="count">10</span>
          </div>
        </div>
      </li>      <li class="item-chats" @click="goLink('/chat')">
        <div :class="wrapperImage">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">mylena</span>
            <span class="last-time">agora pouco</span>
          </div>

          <div class="wrapper-last-message">
            <span class="last-message">Last Message =D</span>
            <span class="count">10</span>
          </div>
        </div>
      </li>      <li class="item-chats" @click="goLink('/chat')">
        <div :class="wrapperImage">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="image friend"
            loading="lazy"
          />
        </div>
        <div class="wrapper-content">
          <div class="wrapper-nickname">
            <span class="nickname">mylena</span>
            <span class="last-time">agora pouco</span>
          </div>

          <div class="wrapper-last-message">
            <span class="last-message">Last Message =D</span>
            <span class="count">10</span>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<style scoped>
.chatsView {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 2px;
}
.list-chats {
  flex: 1;
  max-height: calc(100vh - 172px);
  padding: 8px 0;
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
  max-height: 50px;

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
  gap: 4px;
}

.requests {
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

.item-chats {
  background-color: var(--color-background);
  padding: 8px;
  display: flex;
  gap: 12px;
  cursor: pointer;
  box-shadow: 0 0 1px var(--color-text);
}

.item-chats:active {
  scale: 1.015;
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
  flex-direction: column;
}

.wrapper-nickname {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrapper-last-message {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.count {
  background-color: var(--primary);
  padding: 0 2px;
  height: 20px;
  font-size: 1.4rem;
  border-radius: 4px;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;
}
.nickname {
  font-weight: 600;
}
.last-message {
  font-size: 1.4rem;
  color: var(--color-muted);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 220px;
}
.last-time {
  font-size: 1.2rem;
  color: var(--color-muted);
}

@media (max-width: 474px) {

}
</style>
