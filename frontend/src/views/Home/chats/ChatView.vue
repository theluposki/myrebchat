<script setup>
import HeaderChat from "../../../components/layout/chat/headerChat.vue"
import MainChat from "../../../components/layout/chat/mainChat.vue"
import FooterChat from "../../../components/layout/chat/footerChat.vue"
</script>

<template>
  <div class="wrapper-chat">
    <HeaderChat />
    <MainChat />
    <FooterChat />    
  </div>
</template>

<style scoped>
.wrapper-chat {
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
}
</style>