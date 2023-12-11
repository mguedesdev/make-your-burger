<template>
  <div class="container">
    
    <div class="login-container">
      <div class="login-img">
        <img src="/img/bg-lanches.webp" alt="Login" />
        <div class="login-logo">
          <img src="/img/logo.png" alt="Logo" />
      </div>
      </div>
      
      <div class="login-btns">
      <button v-on:click="toggleLogin(true)" v-bind:class="{ 'selected-btn': showLogin }">Entrar</button>
      <button v-on:click="toggleLogin(false)" v-bind:class="{ 'selected-btn': !showLogin }">Cadastrar</button>
    </div>
      <FormLogin v-if="showLogin" />
      <FormRegister v-if="!showLogin" />
    </div>
  </div>
  
</template>

<script>
  import FormLogin from '@/components/Login/FormLogin.vue';
  import FormRegister from '@/components/Login/FormRegister.vue';

  export default {
    name: 'Login',
    components: {
      FormLogin,
      FormRegister,
    },
    data() {
      return {
        showLogin: true,
      }
    },
    methods: {
      toggleLogin(isLogin) {
        this.showLogin = isLogin;
      }
    }
  }

</script>

<style>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7d473;
  width: 100%;

}

.login-container {
  background-color: #ffffff;
  border-radius: 15px;
  width: 400px;
  height: 600px;
  margin: 0 auto;
  box-shadow: #1111115a 0 0 10px;
}

.login-img {
  width: 100%;
  height: 170px;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
  position: relative;
  background-color: #111;
  
}

.login-img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
}

.login-logo {
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  padding: 20px;
  width: 100px;
  height: 100px;
  box-shadow: #000000b3 0 0 5px 5px;
}

.login-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.login-btns {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
}

.login-btns > button {
  background-color: transparent;
  color: #111;
  border:none;
  padding: 7px 13px;
  cursor: pointer;
  margin-right: 5px;
}

.login-btns button:not(.selected-btn):hover {
  border-bottom: #111 solid 1px;
  color: #111;
}

.login-btns > .selected-btn {
  border-bottom: #fcba03 solid 1px;
  color: #fcba03;
}

</style>