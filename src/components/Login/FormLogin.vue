<template>
  <div class="formLogin-container">
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
  
</template>

<script>
export default {
  name: 'FormLogin',
  components: {
    
  }

}
</script>

<style>  

  .formLogin-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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