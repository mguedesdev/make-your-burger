<template>
  <div class="formLogin-container">
    <Messagem v-model:msg.sync="msg" v-show="msg" />
    <div class="login-title">
        <h2>Entrar</h2>
        <p>Informe seus dados para acessar sua conta.</p>
    </div>

    <form class="login-form" @submit.prevent="login">
        <div class="input-form">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Digite seu email" />
        </div>
        <div>
          <label for="password">Senha</label>
          <input type="password" id="password" name="password" placeholder="Digite sua senha" />
        </div>
        <button type="submit">Entrar</button>
      </form>
  </div>
  
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from 'vue'; // Import ref from 'vue'
import Messagem from '../Message.vue';

export default {
  name: 'FormLogin',
  components: {
    Messagem,
  },
  setup() {
    const msg = ref(''); 
    const router = useRouter();

    const login = async (event) => {
      const email = event.target.email.value;
      const password = event.target.password.value;

      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);
        msg.value = 'Login realizado com sucesso!';
        setTimeout(() => {
          router.push({ name: 'home' });
        }, 1500);

      } catch (error) {
        console.error("Erro de autenticação", error);
        msg.value = 'Erro de autenticação'; 
      }
    };

    return { login, msg }; 
  },
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
    margin-top: 10px;

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