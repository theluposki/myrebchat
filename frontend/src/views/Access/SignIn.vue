<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const lock = ref(false);
const rememberUser = ref(false);

const email = ref(null);
const password = ref(null);

const messageStatus = ref({ message: "", status: "success" });

onMounted(() => {
  fnCheckIfIRememberUser();
});


const fnCheckIfIRememberUser = () => {
  const checkIfIRememberUser = localStorage.getItem("rememberUser");

  if (checkIfIRememberUser) {
    const rememberUserParse = JSON.parse(checkIfIRememberUser);
    rememberUser.value = rememberUserParse.rememberUser;
    email.value = rememberUserParse.email;
  }
};

const showToggleLock = () => {
  const password = document.querySelector(".password");
  if (password.type === "password") {
    lock.value = true;
    password.type = "text";
  } else {
    lock.value = false;
    password.type = "password";
  }
};

const fnRememberUser = () => {
  if (rememberUser.value) {
    localStorage.setItem(
      "rememberUser",
      JSON.stringify({
        rememberUser: rememberUser.value,
        email: email.value,
      })
    );
  } else {
    localStorage.setItem(
      "rememberUser",
      JSON.stringify({
        rememberUser: rememberUser.value,
        email: null,
      })
    );
  }
};

const signIn = () => {
  if (!email.value || !password.value) return;
  fnRememberUser();
  console.log("logado");
};
</script>
<template>
  <div class="wrapper-sign">
    <div class="form">
      <input
        type="text"
        class="input"
        tabindex="1"
        placeholder="digite seu nickname"
        v-model="email"
      />
      <div class="wrapper-input">
        <input
          type="password"
          class="input password"
          tabindex="2"
          placeholder="digte sua senha"
          v-model="password"
        />
        <button class="btn-icons" @click="showToggleLock">
          <i class="ri-lock-unlock-line" v-if="lock"></i>
          <i class="ri-lock-password-line" v-else></i>
        </button>
      </div>

      <div class="save-user">
        <span>Lembrar usuário?</span>
        <div class="checkbox-wrapper-34">
          <input
            class="tgl tgl-ios"
            v-model="rememberUser"
            id="toggle-34"
            type="checkbox"
          />
          <label class="tgl-btn" for="toggle-34"></label>
        </div>
      </div>

      <div :class="'message-status ' + messageStatus.status">
        <span>
          {{ messageStatus.message }}
        </span>
      </div>

      <div class="wrapper-actions">
        <RouterLink to="sign-up" class="link">Não estou cadastrado.</RouterLink>
        <button class="btn" @click="signIn">
          Acessar &nbsp;
          <i class="ri-login-box-line"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper-sign {
  flex: 1;
  background-color: var(--color-background-soft);
  max-height: calc(100vh - 60px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  min-width: 425px;
  max-width: 425px;
  max-height: calc(100vh - 60px);
  background-color: var(--color-background);

  padding: 64px 54px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-direction: column;

  border-radius: 6px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
}

.wrapper-sign .input {
  flex: 1;
  width: 100%;
  max-width: 100%;
}

.wrapper-sign .btn i {
  color: var(--primary);
}

.wrapper-input {
  flex: 1;
  display: flex;
  width: 100%;
  min-width: 100%;
  gap: 4px;
}

.message-status {
  background-color: var(--color-background);
  border-radius: 6px;
  width: 100%;
  max-width: 100%;
  min-height: 50px;
  max-height: 50px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.message-status > span {
  max-width: 100%;
  word-wrap: break-word;
  font-size: 1.4rem;
}

.message-status.error > span {
  color: var(--danger);
}

.message-status.success > span {
  color: var(--primary);
}

.save-user {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}

.save-user > span {
  font-size: 1.4rem;
}

.wrapper-actions {
  border-radius: 6px;
  width: 100%;
  max-width: 100%;
  min-height: 50px;
  max-height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.link {
  text-decoration: none;
  color: var(--color-text);
}

/* checkbox */
.checkbox-wrapper-34 {
  --blue: var(--primary);
  --g08: var(--color-background-soft);
  --g04: #848ea1;
}

.checkbox-wrapper-34 .tgl {
  display: none;
}
.checkbox-wrapper-34 .tgl,
.checkbox-wrapper-34 .tgl:after,
.checkbox-wrapper-34 .tgl:before,
.checkbox-wrapper-34 .tgl *,
.checkbox-wrapper-34 .tgl *:after,
.checkbox-wrapper-34 .tgl *:before,
.checkbox-wrapper-34 .tgl + .tgl-btn {
  box-sizing: border-box;
}
.checkbox-wrapper-34 .tgl::selection,
.checkbox-wrapper-34 .tgl:after::selection,
.checkbox-wrapper-34 .tgl:before::selection,
.checkbox-wrapper-34 .tgl *::selection,
.checkbox-wrapper-34 .tgl *:after::selection,
.checkbox-wrapper-34 .tgl *:before::selection,
.checkbox-wrapper-34 .tgl + .tgl-btn::selection {
  background: none;
}
.checkbox-wrapper-34 .tgl + .tgl-btn {
  outline: 0;
  display: block;
  width: 57px;
  height: 27px;
  position: relative;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  font-weight: 400;
  color: var(--color-background);
}
.checkbox-wrapper-34 .tgl + .tgl-btn:after,
.checkbox-wrapper-34 .tgl + .tgl-btn:before {
  position: relative;
  display: block;
  content: "";
  width: 44%;
  height: 100%;
}
.checkbox-wrapper-34 .tgl + .tgl-btn:after {
  left: 0;
}
.checkbox-wrapper-34 .tgl + .tgl-btn:before {
  display: inline;
  position: absolute;
  top: 4px;
}
.checkbox-wrapper-34 .tgl:checked + .tgl-btn:after {
  left: 56.5%;
}

.checkbox-wrapper-34 .tgl-ios + .tgl-btn {
  background: var(--g08);
  border-radius: 20rem;
  padding: 2px;
  transition: all 0.4s ease;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}
.checkbox-wrapper-34 .tgl-ios + .tgl-btn:after {
  border-radius: 2em;
  background: var(--color-background);
  transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    padding 0.3s ease, margin 0.3s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-wrapper-34 .tgl-ios + .tgl-btn:before {
  content: "Não";
  left: 28px;
  font-weight: bold;
  color: var(--g04);
  transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.checkbox-wrapper-34 .tgl-ios + .tgl-btn:active {
  box-shadow: inset 0 0 0 30px rgba(0, 0, 0, 0.1);
}
.checkbox-wrapper-34 .tgl-ios + .tgl-btn:active:after {
  padding-right: 0.4em;
}
.checkbox-wrapper-34 .tgl-ios:checked + .tgl-btn {
  background: var(--blue);
}
.checkbox-wrapper-34 .tgl-ios:checked + .tgl-btn:active {
  box-shadow: inset 0 0 0 30px rgba(0, 0, 0, 0.1);
}
.checkbox-wrapper-34 .tgl-ios:checked + .tgl-btn:active:after {
  margin-left: -0.4em;
}
.checkbox-wrapper-34 .tgl-ios:checked + .tgl-btn:before {
  content: "Sim";
  left: 8px;
  font-weight: bold;
  color: var(--color-background);
}
/* checkbox */
</style>
