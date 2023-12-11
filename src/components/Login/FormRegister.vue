<template>
  <div class="formRegister-container">
    <div class="register-title">
        <h2>Cadastrar</h2>
        <p>Informe seus dados para cadastrar sua conta.</p>
    </div>

    <form class="register-form">
        <div class="input-form">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label for="password">Senha</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label for="password-repeat">Repetir Senha</label>
          <input type="password" id="password-repeat" name="password-repeat" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
  </div>
  
</template>

<script>
export default {
  name: 'FormRegister',
  components: {
    
  }

}
</script>

<style>  

  .formRegister-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .register-title {
  text-align: center;
  margin-bottom: 20px;
  }

  .register-title h2 {
    color: #111;
    margin-bottom: 5px;
  }

  .register-title p {
  color: #111;
    font-size: 14px;
  }

  .register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }

  .register-form div {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin-bottom: 25px;
  }

  .register-form div label {
    color: #111;
    margin-bottom: 5px;
  }

  .register-form div input {
    border: none;
    border-bottom: #111 solid 1px;
    padding: 5px;
    outline: none;
  }

  .register-form button {
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

  .register-form button:hover {
    background-color: #111;
    color: #fcba03;
  }
</style>