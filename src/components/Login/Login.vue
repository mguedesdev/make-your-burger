<template>
  <div class="main-container">
    
    <div class="login-container">
      <div class="login-img">
        <img src="/img/bg-lanches.webp" alt="Login" />
        <div class="login-logo">
          <img src="/img/logo.png" alt="Logo" />
      </div>
      </div>
      
      <div class="login-btns">
        <button class="selected-btn">Entrar</button>
        <button>Cadastrar</button>
      </div>
    
      <div class="login-title">
        <h2>Entrar</h2>
        <p>Informe seus dados para acessar sua conta.</p>
      </div>

      <form class="login-form">
        <div class="input-form">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label for="password">Senha</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Login',
  components: {
    
  }

}
</script>

<style>

.login-container {
  background-color: #ffffff;
  border-radius: 15px;
  width: 400px;
  height: 100%;
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

.login-title {
  text-align: center;
  margin-bottom: 20px;
}

.login-title h2 {
  color: #111;
  margin-bottom: 5px;
}

.login-title p {
  color: #111;
  font-size: 14px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}

.login-form div {
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-bottom: 25px;
}

.login-form div label {
  color: #111;
  margin-bottom: 5px;
}

.login-form div input {
  border: none;
  border-bottom: #111 solid 1px;
  padding: 5px;
  outline: none;
}

.login-form button {
  background-color: #fcba03;
  border: none;
  padding: 10px;
  color: #111;
  cursor: pointer;
  margin-top: 10px;
  width: 75%;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 40px;
}

.login-form button:hover {
  background-color: #111;
  color: #fcba03;
}




</style>